
import Event from "./Event";

const events = [
    {
        title: "STEM Fellowship National Indicium Research Conference",
        date : new Date(2025, 6, 1),
        images: [
            "/events/Jul2025/pic1.png",
        ],
        paragraphs: [
            "Concluding the 2025 National Indicium Research Conference, hosted by the national STEM Fellowship at Hart House, University of Toronto, with immense pride and gratitude. This year, York University students in the 2024–2025 STEM Fellowship YorkU Indicium Research Program took their research to the national stage and made us incredibly proud.",
            "Congratulations to Faizan, Elie, Balaji, Artin, and Wendy for earning 2nd place in the 3-Minute Thesis (3MT) presentations under the mentorship of Dr. Benard Isojeh, a dedicated professor within the Lassonde School of Engineering at York University.",
            "The 2024–2025 Indicium Research Program at York University provided research opportunities to ~100 undergraduate students, including many from underrepresented backgrounds. It was also the largest Indicium Research Program in Ontario, standing out among universities in the province for its scale and impact.",
            "We are deeply grateful to all the 2025 YorkU Indicium Research mentees whose curiosity, drive, and commitment brought this program to life. Your dedication continues to inspire. To our YorkU Indicium Research mentors—professors, graduate students, and postdoctoral researchers—thank you for your time, insight, and mentorship. A sincere thank you to the National STEM Fellowship for their continued support in empowering student research across the country.",
            "Special appreciation to the 2024–2025 YorkU Indicium Leads, Sania Khoso and Keisha Badrinauth, and to the 2024–2025 STEM Fellowship YorkU Executive Leadership Team for making this opportunity possible. Finally, we acknowledge the 2024–2025 STEM Fellowship YorkU Presidential Team—Presidents Ravjyot Ughra and Nayela Salam, and Vice-Presidents Suheera Siddiqui and Rateeba Ahmad—whose vision, leadership, and tireless dedication elevated the program to new heights at York University. This achievement would not have been possible without their time, commitment, and efforts.",
        ],
    },
    {
        title: "STEM Fellowship at York University REO Program Day",
        date : new Date(2025, 2, 1),
        images: [
            "/events/March2025/pic4.jpg",
            "/events/March2025/pic5.jpg",
            "/events/March2025/pic6.jpg",
            "/events/March2025/pic1.jpg",
            "/events/March2025/pic2.jpg",
            "/events/March2025/pic3.jpg",
        ],
        paragraphs: [
            "Empowering the next generation of scientists and driving change: The 2025 REO (Research Exploration Opportunity) program, hosted by STEM Fellowship at York University, was a transformative experience for high school students—including those from underrepresented backgrounds across the GTA in Ontario, Canada.",
            "This program provided them with the unique opportunity to step into the world of cutting-edge scientific research in the research labs within the Faculty of Science at York University! 🧬👩‍🔬",
            "Led by our visionary presidential and executive team, the REO program was not just an event, but a catalyst for diversity and inclusion in the STEM field. Our leadership, dedication, and commitment to creating accessible opportunities made this program possible, which we are extremely proud of, proving that the future of science is more inclusive and equitable. 🌟",
            "Through exposure to real-world research, high school students gained invaluable insights into various scientific disciplines, fostering their curiosity and passion. Beyond academic growth, the program opened new career pathways, broadened horizons, and gave them the tools and inspiration to pursue higher education and professional opportunities in science. The REO program wasn’t just about learning in a lab—it was about shaping future STEM leaders, one experience at a time. 🔬✨. Furthermore, our executive team is beyond grateful for all the involved labs, professors, researchers, the National STEM Fellowship, as well as the passionate high school students who participated, as this program would have not been possible without them all. 🧪"
        ],
    },
    {
        title: "STEM Fellowship at York University Bake Sale Fundraiser",
        date : new Date(2025, 1, 1),
        images: [
            "/events/Feb2025/pic1.jpg",
            "/events/Feb2025/pic2.jpg",
            "/events/Feb2025/pic3.jpg",
            "/events/Feb2025/pic4.jpg",
            "/events/Feb2025/pic5.jpg",
        ],
        paragraphs: [
            "STEM Fellowship at York University hosted a bake sale fundraiser to support our research programs, including Indicium and REO. 🍪✨ These initiatives create meaningful opportunities for students from underrepresented backgrounds to engage in research, develop their skills, and contribute to impactful projects. Thank you to everyone who stopped by and supported—your generosity helps us continue making research more accessible for all!",
        ],
    },
    {
        title: "STEM Fellowship at York University at the YFS Winter 2025 Clubs Fair",
        date : new Date(2025, 0, 1),
        images: [
            "/events/Jan2025/pic1.jpg",
            "/events/Jan2025/pic2.jpg",
            "/events/Jan2025/pic3.jpg",
            "/events/Jan2025/pic4.jpg",
            "/events/Jan2025/pic5.jpg",
        ],
        paragraphs: [
            "STEM Fellowship at York University had an amazing time at the YFS Winter 2025 Clubs Fair! ❄️✨ Thank you to everyone who stopped by our table to learn more about our initiatives, including research programs like Indicium and REO, leadership opportunities, and ways to get involved. We loved connecting with so many passionate students and can’t wait to see the impact we’ll create together this year!",
        ],
    },
];

function EventsPage() {
  return (
    <div className="w-full min-h-full px-4 py-8">
      <div className="mx-auto max-w-3xl space-y-8">
        {events.map(event => {
            return (
                <Event key={event.title}
                    title={event.title}
                    date={event.date}
                    images={event.images}
                    paragraphs={event.paragraphs}
                />
            );
        })}
      </div>
    </div>
  );
}

export default EventsPage
