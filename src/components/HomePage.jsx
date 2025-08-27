import { Link } from "react-router-dom";

function HomePage() {
    return(
        <div className="flex w-full p-15 justify-center">
            <article className="prose prose-invert prose-slate lg:prose-lg prose-p:text-slate-200  
                          prose-a:text-blue-400 hover:prose-a:text-blue-300
                          prose-headings:font-semibold prose-p:leading-relaxed
                          max-w-3xl">
                <h1 className="text-center underline">STEM Fellowship at York University</h1>
                <p>
                    STEM Fellowship at York University is a student-led non-profit organization dedicated to promoting innovation, inclusivity, and excellence in science, technology, engineering, and mathematics (STEM). We are affiliated with the national STEM Fellowship, have 400+ members, and are ratified under SCLD, YFS, and YUSC at York University.
                </p>
                <p>
                    We proudly offer the Indicium Research Program, which provides undergraduate students at York University, including those from underrepresented backgrounds, the opportunity to conduct research alongside York University researchers, professors, graduate students, and postgraduates over several months. Participants gain hands-on research experience in fields such as math, biology, chemistry, physics, engineering, kinesiology, and health sciences and present their findings at the National Inter-University Research Conference, hosted by the National STEM Fellowship.
                </p>
                <p>
                    Additionally, we offer the Research Exploration Opportunity (REO) program, which provides local and underrepresented high school students with the unique opportunity to explore research alongside York University's researchers in cutting-edge labs within the Faculty of Science at York University. This program offers participants invaluable exposure to academic research, inspiring their pursuit of STEM education and careers.
                </p>
                <p>
                    Through these transformative initiatives, as well as workshops, networking opportunities, and community-building events, STEM Fellowship at York University strives to empower students and promote equity within STEM fields.
                </p>
                <p>
                    During the 2024–2025 academic year, under the leadership of Presidents Ravjyot Ughra and Nayela Salam, and Vice-Presidents Suheera Siddiqui and Rateeba Ahmad, our team provided research and STEM opportunities to ~100 students, oversaw the largest Indicium Research Program compared to other universities in Ontario, grew to become the largest STEM-related student organization at York University, and earned recognition from faculty leaders within the Faculty of Science for our contributions to both the York University and local academic and student community.
                </p>
                <p>
                    Building on this impact, the 2025–2026 academic year is led by our President, Ravjyot Ughra, and Vice-Presidents, Suheera Siddiqui and Brianna Callisto.
                </p>
            </article>
        </div>
    );
}


export default HomePage