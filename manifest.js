{
    "manifest_version": 3,
    "name": "AI Autocomplete",
    "version": "1.0",
    "description": "Autocomplete text fields with AI suggestions.",
    "permissions": ["activeTab", "scripting", "storage"],
    "host_permissions": ["http://localhost:5000/*"],
    "background": {
      "service_worker": "background.js"
    },
    "content_scripts": [
      {
        "matches": ["<all_urls>"],
        "js": ["content.js"],
        "css": ["styles.css"]
      }
    ]
  }
  