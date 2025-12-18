// Location data with testimonials and chart info
const locations = [
    {
        name: "Pune, India",
        charts: [
            {
                title: "KTCS Problem Solving & Decision Making",
                subtitle: "Overall, how would you rate your class experience?",
                type: "donut",
                imageUrl: "images/Pune_Overall.png",
            },
            {
                title: "I would recommend this course to others.",
                type: "donut",
                imageUrl: "images/Pune_Recommend.png",
            },
            {
                title: "The instructor demonstrated expertise on the subject.",
                type: "bar",
                imageUrl: "images/Pune_Instructor.png",
            },
        ],
        testimonials: [
            "I would like to express my sincere appreciation for this workshop. I hope that we can organize similar sessions in the future, perhaps focusing on topics such as team building and leadership development. Brendon's expertise in these areas would undoubtedly be a great asset to the team.",
            "We truly enjoyed Branden's session, it was both fun and a valuable learning experience. Sessions like this should be held at least once a year, as they significantly contribute to personal growth and help enhance our areas of interest.",
        ],
    },
    {
        name: "Bangalore, India",
        charts: [
            {
                title: "KTCS Problem Solving & Decision Making",
                subtitle: "Overall, how would you rate your class experience?",
                type: "donut",
                imageUrl: "images/Bang_Overall.png",
            },
            {
                title: "I would recommend this course to others.",
                type: "donut",
                imageUrl: "images/Bang_Recommend.png",
            },
            {
                title: "The instructor demonstrated expertise on the subject.",
                type: "bar",
                imageUrl: "images/Bang_Instructor.png",
            },
        ],
        testimonials: [
            "This session should be mandatory to all members in our team members.  It helps in having clear approach-to-solve-problem. Trainer is excellent coach. He kept the session interactive.",
            "Brendan is a great teacher. I would say my approach of problem solving has changed after this session and the methodologies taught by him were great!",
            "Brendon Martin is extraordinary in his job. I learned a lot from these workshops and would recommend others the same.",
        ],
    },
    {
        name: "Guadalajara, Mexico",
        charts: [
            {
                title: "KTCS Problem Solving & Decision Making",
                subtitle: "Overall, how would you rate your class experience?",
                type: "donut",
                imageUrl: "images/Mex_Overall.png",
            },
            {
                title: "I would recommend this course to others.",
                type: "donut",
                imageUrl: "images/Mex_Recommend.png",
            },
            {
                title: "The instructor demonstrated expertise on the subject.",
                type: "bar",
                imageUrl: "images/Mex_Instructor.png",
            },
        ],
        testimonials: [
            "This is a “Must-Have” course, it will help improve communication skills, problem solve, issues management.",
            "Excellent dynamic workshop. Brendan was keeping my attention all day long. I used this every day at my job.",
            "The training really surpassed my expectations.",
        ],
    },
    {
        name: "San Diego, USA",
        charts: [
            {
                title: "KTCS Problem Solving & Decision Making",
                subtitle: "Overall, how would you rate your class experience?",
                type: "donut",
                imageUrl: "images/CA_Overall.png",
            },
            {
                title: "I would recommend this course to others.",
                type: "donut",
                imageUrl: "images/CA_Recommend.png",
            },
            {
                title: "The instructor demonstrated expertise on the subject.",
                type: "bar",
                imageUrl: "images/CA_Instructor.png",
            },
        ],
        testimonials: [
            "This is very useful class, good discussion and team work, all together in one class. thanks Instructor Brendan. FICO should have more of this kind of training. we're all benefit from case study and decision making strategy.",
            "It far exceeded my expectations. Brendan explained everything so clearly. Really hope to get more training sessions with him in the future as he is very knowledgeable in so many areas.",
            "One of the best trainings I have taken that has direct impact on my work.",
        ],
    },
    {
        name: "Minneapolis, USA",
        charts: [
            {
                title: "KTCS Problem Solving & Decision Making",
                subtitle: "Overall, how would you rate your class experience?",
                type: "donut",
                imageUrl: "images/MN_Overall.png",
            },
            {
                title: "I would recommend this course to others.",
                type: "donut",
                imageUrl: "images/MN_Recommend.png",
            },
            {
                title: "The instructor demonstrated expertise on the subject.",
                type: "bar",
                imageUrl: "images/MN_Instructor.png",
            },
        ],
        testimonials: [
            "The workshop really helped show us the proper way to troubleshoot such as determining what isn't the problem and how to gather information. This will be helpful to my role at FICO.",
            "The training was hands on and group interactive which is how I learn the best. Never had a boring moment in either of the days.",
            "Loved the instructor. He was a wealth of information.",
        ],
    },
]

// Function to create location sections
function renderLocations() {
  const container = document.getElementById("locations-container")

  locations.forEach((location) => {
    const locationDiv = document.createElement("div")
    locationDiv.className = "location-result"

    // Title
    const title = document.createElement("h2")
    title.className = "location-title"
    title.textContent = location.name
    locationDiv.appendChild(title)

    // Results grid
    const resultsGrid = document.createElement("div")
    resultsGrid.className = "results-grid"

    // Add charts
    location.charts.forEach((chart) => {
      const chartCard = document.createElement("div")
      chartCard.className = "chart-card"

      const chartTitle = document.createElement("div")
      chartTitle.className = "chart-title"
      chartTitle.textContent = chart.title
      chartCard.appendChild(chartTitle)

      if (chart.subtitle) {
        const chartSubtitle = document.createElement("div")
        chartSubtitle.className = "chart-subtitle"
        chartSubtitle.textContent = chart.subtitle
        chartCard.appendChild(chartSubtitle)
      }

      // Chart image placeholder
      const chartImage = document.createElement("img")
      chartImage.src = chart.imageUrl
      chartImage.alt = chart.title
      chartImage.className = "chart-placeholder"
      chartImage.onerror = function () {
        // If image fails to load, show placeholder
        const placeholder = document.createElement("div")
        placeholder.className = "chart-placeholder"
        placeholder.textContent = `[${chart.type.toUpperCase()} CHART: ${chart.title}]`
        this.parentNode.replaceChild(placeholder, this)
      }
            chartCard.appendChild(chartImage)

            // Bottom-right annotation to indicate no negative selections
            // Skip adding on Instructor charts (image filename ends with "Instructor.png")
            const isInstructorChart = /Instructor\.png$/i.test(chart.imageUrl)
            if (!isInstructorChart) {
                const annotations = document.createElement("div")
                annotations.className = "chart-annotations"
                annotations.innerHTML = "Neutral [0]<br>Disagree [0]<br>Strongly Disagree [0]"
                chartCard.appendChild(annotations)
            }

      resultsGrid.appendChild(chartCard)
    })

    // Add testimonials inside the grid
    if (location.testimonials && location.testimonials.length > 0) {
      const testimonialsDiv = document.createElement("div")
      testimonialsDiv.className = "testimonials"

      const testimonialsTitle = document.createElement("h3")
      testimonialsTitle.textContent = "Our Testimonials:"
      testimonialsDiv.appendChild(testimonialsTitle)

      location.testimonials.forEach((testimonial) => {
        const testimonialP = document.createElement("p")
        testimonialP.className = "testimonial"
        testimonialP.textContent = `"${testimonial}"`
        testimonialsDiv.appendChild(testimonialP)
      })

      resultsGrid.appendChild(testimonialsDiv)
    }

    locationDiv.appendChild(resultsGrid)

    container.appendChild(locationDiv)
  })
}

// Initialize on page load
document.addEventListener("DOMContentLoaded", renderLocations)
