# FICO Training Feedback Website

A simple HTML/CSS/JS website for displaying FICO training feedback and results across multiple locations.

## Structure

- `index.html` - Main HTML file
- `styles.css` - All styling
- `script.js` - JavaScript for dynamic content
- `images/` - Folder for your images and charts

## Images Needed

Place these images in the `images/` folder:

### Charts (Pune, India)
- `chart-pune-1.png` - Problem Solving donut chart
- `chart-pune-2.png` - Recommendation donut chart  
- `chart-pune-3.png` - Instructor expertise bar chart

### Other Images
- `world-map.png` - World map graphic
- `team-1.jpg` through `team-5.jpg` - Team photos
- `hero-background.jpg` - Hero section background (optional)

## Adding More Locations

Edit the `locations` array in `script.js` to add more cities with their charts and testimonials.

## Azure Static Web Apps Deployment

1. Create a new Static Web App in Azure Portal
2. Connect your repository
3. Set build configuration:
   - App location: `/`
   - No build required (static HTML)
4. Deploy!

## Customization

- Colors: Edit CSS variables in `styles.css`
- Content: Edit the `locations` array in `script.js`
- Layout: Modify grid structures in CSS
