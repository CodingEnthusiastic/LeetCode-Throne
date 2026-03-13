# Sound Props Integration Guide

## ✅ Completed Pages
- **Contest.tsx** - Filter tabs + action buttons (register, enter, view)
- **Discussion.tsx** - Create form, submit, cancel buttons
- **Login.tsx** - Role toggle, password toggle, sign in, Google auth

## 🎵 Sound Mapping Reference

Use these sound roles for different interaction types:

```typescript
// Confirmation actions (submit, save, login, register, confirm)
sound="interaction.confirm"

// Subtle navigation (back, view, open in new tab)
sound="interaction.subtle"

// Toggles (switch, tab change, filter, radio, checkbox)
sound="interaction.toggle"

// Opens modals/dialogs/forms
sound="overlay.open"

// Closes modals/dialogs/forms
sound="overlay.close"

// Warning/Error actions (delete, cancel important action)
sound="notification.warning"

// Success notifications
sound="notification.success"

// Info notifications
sound="notification.info"

// Error notifications
sound="notification.error"

// Celebratory/Milestone actions
sound="hero.complete"
sound="hero.milestone"
```

## 📝 How to Add Sounds to Any Button

### Before:
```tsx
<button onClick={() => handleAction()}>
  Click me
</button>
```

### After:
```tsx
<button onClick={() => handleAction()} sound="interaction.confirm">
  Click me
</button>
```

## 🔧 Quick Apply Pattern for Each Page

### Problems.tsx
- "Solve Now" (POTD) → `sound="interaction.confirm"`
- Difficulty filter select → `sound="interaction.toggle"`
- Tag filter select → `sound="interaction.toggle"`
- Problem rows/links → `sound="interaction.subtle"`
- Pagination buttons → `sound="interaction.toggle"`

### ProblemDetail.tsx
- Run Code Button → `sound="interaction.confirm"`
- Submit Solution → `sound="interaction.confirm"`
- Language Selector → `sound="interaction.toggle"`
- Reset Code Button → `sound="interaction.subtle"`
- Copy Code Button → `sound="interaction.subtle"`
- Tab Switching → `sound="interaction.toggle"`

### Chat.tsx
- Send Message Button → `sound="interaction.confirm"`
- Create Room Button → `sound="overlay.open"`
- Submit Room Creation → `sound="interaction.confirm"`
- Cancel Room Creation → `sound="overlay.close"`
- Emoji Picker Open → `sound="overlay.open"`
- Add Reaction Button → `sound="interaction.toggle"`
- Room Tab Switching → `sound="interaction.toggle"`
- Delete Message Button → `sound="notification.warning"`

### AnnounceDetail.tsx
- Edit Announcement → `sound="interaction.toggle"`
- Delete Announcement → `sound="notification.warning"`
- Share Announcement → `sound="interaction.confirm"`
- Post Comment → `sound="interaction.confirm"`
- Edit Comment → `sound="interaction.toggle"`
- Delete Comment → `sound="notification.warning"`

### Announcements.tsx
- Create Announcement Button → `sound="overlay.open"`
- Publish Button → `sound="interaction.confirm"`
- Cancel Button → `sound="overlay.close"`
- Filter Buttons → `sound="interaction.toggle"`
- Clear Filters → `sound="interaction.toggle"`

### Game.tsx
- Game Mode Selection → `sound="interaction.toggle"`
- Start Game Button → `sound="interaction.confirm"`
- Submit Code Solution → `sound="interaction.confirm"`
- Back Button → `sound="interaction.subtle"`

### Interview.tsx
- Microphone Toggle → `sound="interaction.toggle"`
- Camera Toggle → `sound="interaction.toggle"`
- Stop Interview → `sound="notification.warning"`
- Submit Answer → `sound="interaction.confirm"`
- Next Question → `sound="interaction.confirm"`

### DiscussionDetail.tsx
- Back Button → `sound="interaction.subtle"`
- Upvote/Downvote → `sound="interaction.toggle"`
- Post Comment → `sound="interaction.confirm"`
- Edit Comment → `sound="interaction.toggle"`
- Delete Comment → `sound="notification.warning"`

### CompanyProblems.tsx
- View Certificate → `sound="interaction.confirm"`
- Get Certificate → `sound="interaction.confirm"`
- Clear Filters → `sound="interaction.toggle"`
- Problem Links → `sound="interaction.subtle"`

## 🚀 To Apply to All Remaining Pages:

1. Open each file in the `src/pages/` directory
2. Find each button/interactive element
3. Add the appropriate `sound="..."` prop
4. Test by clicking the button - you should hear a sound!

## ✨ Example Complete Button:

```tsx
<button
  onClick={() => handleCreateDiscussion()}
  sound="interaction.confirm"
  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
>
  <Plus className="h-4 w-4 mr-2" />
  Create Discussion
</button>
```

## 🎧 Sound Configuration (sensory.config.js)
```javascript
module.exports = {
  enabled: true,
  volume: 0.35,
  theme: "aero", // Options: soft, aero, arcade, organic, glass, industrial, minimal, retro, crisp
  categories: {
    interaction: true,    // Enabled
    navigation: true,     // Enabled
    notification: true,   // Enabled
    overlay: true,        // Enabled
    hero: false,          // Disabled (opt-in only)
  },
};
```

Change `volume` to adjust loudness (0.0 - 1.0)
Change `theme` to switch sound packs
Set `hero: true` to enable celebratory sounds

## 📊 Progress Summary

**Pages Updated (3/11):**
- ✅ Contest.tsx
- ✅ Discussion.tsx
- ✅ Login.tsx
- ✅ Problems.tsx (partial)

**Pages Remaining (8):**
- ⏳ ProblemDetail.tsx
- ⏳ Chat.tsx
- ⏳ AnnounceDetail.tsx
- ⏳ Announcements.tsx
- ⏳ Game.tsx
- ⏳ Interview.tsx
- ⏳ DiscussionDetail.tsx
- ⏳ CompanyProblems.tsx

All components are already sound-enabled! Just add the `sound` prop to any interactive element.
