# Getting Started with My Diary Todos

Welcome to **My Diary Todos** – a beautiful, offline-capable Progressive Web App designed to help you keep track of your daily tasks with a charming diary-like interface! ✨

## What is This App?

My Diary Todos is a **Progressive Web App (PWA)** that combines the simplicity of a todo list with the aesthetic of a digital diary. It features:

- 📝 **Diary-Style Todo List** - Write your tasks in a beautiful diary interface
- 📱 **Fully Responsive** - Works seamlessly on mobile, tablet, and desktop
- 💾 **Offline Support** - Access your todos even without an internet connection
- 🔔 **Push Notifications** - Get reminders for your tasks
- ⚡ **Lightning Fast** - Optimized for performance with minimal load times
- 💜 **Gorgeous UI** - Handwritten fonts and purple color scheme for a personal touch

## Prerequisites

Before you get started, you'll need:

- **A Modern Web Browser** - Chrome, Firefox, Safari, or Edge (any recent version)
- **Internet Connection** - For the initial setup and to download the app
- **A Local Web Server** - If developing locally

### Supported Browsers

| Browser | Support | Offline | Notifications |
|---------|---------|---------|---|
| Chrome | ✅ Full | ✅ Yes | ✅ Yes |
| Firefox | ✅ Full | ✅ Yes | ✅ Yes |
| Safari | ⚠️ Partial | ✅ Yes | ⚠️ Limited |
| Edge | ✅ Full | ✅ Yes | ✅ Yes |

## Installation Options

### Option 1: Install from GitHub Pages (Easiest)

1. Visit: **[https://yolanda-loo.github.io/Progressive_web_App.github.io/](https://yolanda-loo.github.io/Progressive_web_App.github.io/)**

2. **Install the App:**
   - **On Mobile (Android/iOS):**
     - Look for the "Add to Home Screen" or "Install" prompt in your browser
     - Tap it to install the app directly to your home screen
   
   - **On Desktop:**
     - Click the install icon in your browser's address bar
     - Or look for an "Install" option in the browser menu

3. That's it! The app will launch like a native application 🎉

### Option 2: Local Development Setup

If you want to develop or modify the app locally:

#### Step 1: Clone the Repository

```bash
git clone https://github.com/Yolanda-loo/Progressive_web_App.github.io.git
cd Progressive_web_App.github.io
```

#### Step 2: Start a Local Web Server

You need to serve files over HTTP/HTTPS for Service Workers to work properly.

**Using Python:**
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

**Using Node.js:**
```bash
# Install http-server globally (if not already installed)
npm install -g http-server

# Start the server
http-server
```

**Using Ruby:**
```bash
ruby -run -ehttpd . -p8000
```

**Using PHP:**
```bash
php -S localhost:8000
```

#### Step 3: Access the App

Open your browser and navigate to:
```
http://localhost:8000
```

The app should load and you'll see the diary interface! 💜

## First Time Setup

### 1. **Adding Your First Todo**

Once the app loads:

1. Click on the input field that says *"Dear Diary, today I need to..."*
2. Type what you'd like to accomplish today
3. Press **Enter** or click **"Add to Diary 🌸"** button
4. Your todo appears in the list below!

### 2. **Managing Your Todos**

Each todo item has two actions:

- **"Done 🌷"** - Mark the task as completed (it will show a strikethrough)
- **"Erase 🗑️"** - Delete the task permanently

### 3. **Enable Notifications (Optional)**

To receive push notifications:

1. Click the **"Enable Notifications 💜"** button
2. Allow notification permissions when prompted
3. You'll now receive sweet reminders for your tasks!

### 4. **Offline Access**

The app automatically works offline:

- All your todos are saved locally on your device
- You'll see a message: *"You are offline, dear. Some features may be limited."*
- Your todos remain available, and changes sync when you're back online

## File Structure

```
Progressive_web_App.github.io/
├── index.html              # Main app interface with all functionality
├── manifest.json           # PWA configuration for installation
├── service-worker.js       # Handles offline support and caching
├── icon.png                # App icon (192x192 and 512x512)
├── README.md               # Project overview
└── wiki/                   # Documentation (you are here!)
    └── Getting-Started.md
```

## Key Features Explained

### 📴 Offline Support

The Service Worker caches essential files when you first visit. This means:

- ✅ The app works without internet
- ✅ Your todos are stored locally in `localStorage`
- ✅ When you're offline, you'll see a notification
- ✅ Changes sync automatically when reconnected

### 🔔 Push Notifications

After enabling notifications:

- Get reminders for your tasks
- Notifications work even when the app is closed
- Click a notification to open the app

### 💾 Data Persistence

All your todos are stored in your browser's `localStorage`:

- Data persists across browser sessions
- Data is local to your device (not sent to servers)
- Clear browser data to reset todos

### 🎨 Responsive Design

The app looks beautiful on any device:

- **Mobile**: Optimized touch interactions and font sizes
- **Tablet**: Perfect balance between space and readability
- **Desktop**: Full-featured interface with hover effects

## Troubleshooting

### Issue: App won't install

**Solution:**
- Ensure you're using HTTPS or localhost
- Clear browser cache and try again
- Check that your browser supports PWAs (Chrome, Firefox, Edge)

### Issue: Service Worker not registering

**Solution:**
- Open browser Developer Tools (F12)
- Go to Application > Service Workers
- Check for any error messages
- Try hard-refreshing (Ctrl+Shift+R or Cmd+Shift+R)

### Issue: Todos disappeared

**Solution:**
- Your browser's storage might be full - clear some space
- Check if you're in private/incognito mode (data doesn't persist)
- Try a different browser

### Issue: Notifications not working

**Solution:**
- Ensure you've granted notification permissions
- Check your system notification settings
- Some browsers require HTTPS for notifications

## Tips & Best Practices

✨ **Pro Tips:**

1. **Bookmark the App** - For quick access, bookmark the installed app or the website
2. **Sync Across Devices** - To sync todos between devices, consider logging in (if available)
3. **Regular Backups** - Export your todos periodically (feature may be added later)
4. **Update Regularly** - Keep your browser and app updated for the best experience
5. **Use Meaningful Names** - Write clear, actionable task descriptions

## What's Next?

Now that you're set up, explore these topics:

- **[Architecture Overview](./Architecture)** - Understand how the app works under the hood
- **[Features & Usage](./Features)** - Learn about all available features
- **[Customization Guide](./Customization)** - Modify the app to your liking
- **[Contributing](./Contributing)** - Help improve the app!

## Need Help?

- 📖 Check the [FAQ](./FAQ) for common questions
- 🐛 [Report a Bug](https://github.com/Yolanda-loo/Progressive_web_App.github.io/issues/new)
- 💬 [Start a Discussion](https://github.com/Yolanda-loo/Progressive_web_App.github.io/discussions)

---

**Happy organizing! You're doing amazing, keep shining! 🌟**
