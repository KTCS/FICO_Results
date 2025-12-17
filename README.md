# FICO Training Feedback Website

A simple HTML/CSS/JS website for displaying FICO training feedback and results across multiple locations.

## Structure

- `index.html` - Main HTML file
- `styles.css` - All styling
- `script.js` - JavaScript for dynamic content
- `images/` - Folder for your images and charts

## Images Needed

Place these images in the `images/` folder:

### Charts by Location

**Pune, India (Section 1)**
- `Pune_Overall.png` - Problem Solving & Decision Making overall rating
- `Pune_Recommend.png` - Course recommendation chart
- `Pune_Instructor.png` - Instructor expertise chart

**Bangalore, India (Section 2)**
- `Bang_Overall.png` - Problem Solving & Decision Making overall rating
- `Bang_Recommend.png` - Course recommendation chart
- `Bang_Instructor.png` - Instructor expertise chart

**Guadalajara, Mexico (Section 3)**
- `Mex_Overall.png` - Problem Solving & Decision Making overall rating
- `Mex_Recommend.png` - Course recommendation chart
- `Mex_Instructor.png` - Instructor expertise chart

**San Diego, USA (Section 4)**
- `SanD_Overall.png` - Problem Solving & Decision Making overall rating
- `SanD_Recommend.png` - Course recommendation chart
- `SanD_Instructor.png` - Instructor expertise chart

**Minneapolis, USA (Section 5)**
- `Minn_Overall.png` - Problem Solving & Decision Making overall rating
- `Minn_Recommend.png` - Course recommendation chart
- `Minn_Instructor.png` - Instructor expertise chart

### Other Images
- `world-map.webp` - World map graphic
- `group.webp` - Group photo
- `thumbnail.jpg` - Hero section background

## Adding More Locations

Edit the `locations` array in `script.js` to add more cities with their charts and testimonials.

### Location Color Schemes

Each location section has a custom color scheme defined in `styles.css`:

- **Pune, India**: Default blue (`#19476f` background, `#215f94` containers)
- **Bangalore, India**: Purple (`#642a6e` background, `#873894` containers)
- **Guadalajara, Mexico**: Teal (`#007b84` background, `#009ea9` containers)
- **San Diego, USA**: Bright blue (`#0088ad` background, `#00b3e4` containers)
- **Minneapolis, USA**: Purple (`#652a6f` background, `#873894` containers)

To customize colors for a specific location, use `.location-result:nth-child(n)` selector in CSS.

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
