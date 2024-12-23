const express = require("express");
const Blog = require('./model/blogSchema.js');
const User = require('./model/userSchema.js');
const bcrypt = require('bcrypt');
const multer = require('multer');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const app = express();
const cors = require('cors');
const sanitizeHtml = require('sanitize-html');

require('dotenv').config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const corsOptions = {
  origin: 'http://localhost:3000', // Specify the React app's URL
  credentials: true, // Allow credentials (cookies)
};

app.use(cors(corsOptions));


mongoose.connect(process.env.MONGO_URI || "mongodb://localhost:27017/Restraunt")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

const storage = multer.memoryStorage();
const upload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith("image/")) {
      cb(null, true);
    } else {
      cb(new Error("Only image files are allowed!"));
    }
  },
});

// Sign-up
app.post('/signup', async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  try {
    const user = new User({ firstName, lastName, email, password: hashedPassword });
    const isFound = await User.findOne({ email });
    if (isFound) {
      return res.status(400).send("User already exists");
    }
    await user.save();
    res.status(201).send('User registration successful');
  } catch (err) {
    res.status(400).send('Error registering user');
  }
});

// Login
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).send('User not found');
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.json({ message: "Password is incorrect" });
    }

    const token = jwt.sign({ email: user.email }, process.env.SECRET_KEY, { expiresIn: '1h' });
    res.cookie('token', token, { 
      httpOnly: true, 
      maxAge: 3600000, 
      secure: process.env.NODE_ENV === 'production', // Changed here: added secure flag for HTTPS in production
    });
    return res.json({ status: true, message: 'Login successful' });
  } catch (err) {
    console.error('Error during login:', err);
    res.status(500).send('Internal server error');
  }
});

// JWT Verification Middleware
const verifyUser = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.status(401).json({ message: "No token, authorization denied" }); // Changed here: 401 Unauthorized for missing token
    }
    const decoded = jwt.verify(token, process.env.SECRET_KEY); // Changed here: fixed the jwt.verify syntax
    req.user = decoded; // Attach decoded user info to the request object
    next(); // Proceed to the next middleware or route handler
  } catch (err) {
    return res.status(401).json({ message: "Invalid or expired token" }); // Changed here: 401 Unauthorized for invalid token
  }
};

// Create blog
app.post('/create-blog', upload.single('image'), verifyUser, async (req, res) => {
  try {
    const { title, description, content } = req.body;
    const image = req.file;
    if (!title || !content || !image) {
      return res.status(400).json({ error: "All fields are required!" });
    }

    const sanitizedContent = sanitizeHtml(req.body.content, {
      allowedTags: ['b', 'i', 'em', 'strong', 'a', 'p'], // Changed here: allowedTags set for sanitization
      allowedAttributes: { 'a': ['href'] }, // Changed here: allowedAttributes set for sanitization
    });

    const newBlog = new Blog({
      title,
      content: sanitizedContent,
      description,
      image: {
        data: req.file.buffer,
        contentType: req.file.mimetype,
      },
    });

    await newBlog.save();
    res.status(201).json({ message: 'Blog created successfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create the blog!' });
  }
});

// Get blogs
app.get('/blogs', async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.status(200).json(blogs);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch blogs' });
  }
});

// Get specific blog
app.get('/blogs/:id', async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    res.status(200).json(blog);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch blog' });
  }
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
