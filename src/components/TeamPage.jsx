

const execs = [
  {
    name: "Ravjyot Ughra",
    role: "President",
    year: "Third",
    program: "Honours BSc Biology",
    about:
      `My name is Ravjyot Ughra (she/her), and I am honoured to serve as the President of STEM Fellowship at York University for the 2025–2026 academic year. I am currently in my third year of the Honours BSc Biology program at York University. In addition to this role, my other commitments for this academic year include a part-time job, volunteering, and serving as an undergraduate research assistant within a research lab at York University. I am also actively involved in student leadership, serving as a Science Student Ambassador and as Co-President of another student organization at York University. In my free time, I enjoy spending time with my friends, going on long drives, and visiting the farm. An interesting fact about me is I have a twin brother and am the eldest out of three. One of my favourite aspects of York University are the meaningful social connections I have built with friends, peers, professors, and teaching assistants, as these relationships have shaped some of my most memorable experiences. After completing my undergraduate degree, I aspire to work towards a career that allows me to meaningfully help others and create a positive impact and difference in their lives. Under my term as Co-President of STEM Fellowship at York University during the 2024–2025 academic year, our leadership team provided research and STEM opportunities to ~100 students, hosted the largest Indicium Research Program compared to other universities in Ontario, and we grew to become the largest STEM-related student organization at York University, gaining recognition from faculty leaders within the Faculty of Science. I am excited to continue building on this momentum and am committed to further advancing STEM Fellowship at York University during the 2025–2026 academic year to make a meaningful impact within the local and York University student and academic community.`,
  },
  {
    name: "Brianna Callisto",
    role: "Vice-President",
    year: "Third",
    program: "Honours BSc Biology",
    about:
      `My name is Brianna, and I am currently pursuing a degree in Biology at York University. Outside of academics, I enjoy staying active through running and pilates, and I also love unwinding with a good book. A fun fact about me is that I’m always on the lookout for hidden nature trails to explore. I find being outdoors helps me recharge and stay balanced. This year, I’m excited to be serving as a Vice President of the Healthcare Society at YorkU, where I get to connect with like-minded peers and contribute to meaningful initiatives. I am deeply passionate about helping people, and I hope to carry that passion forward into a future career in healthcare, where I can make a lasting impact on others’ lives.
        What I love most about York University is the supportive and welcoming community that makes it easy to feel at home. Being part of such an environment has encouraged me to grow not only as a student but also as a leader and a person. Looking ahead, I am motivated to continue learning, building connections, and preparing myself for a role where I can combine my love for science with my commitment to helping others.`,
  },
  {
    name: "Suheera Siddiqui",
    role: "Vice-President",
    year: "Fifth",
    program: "Honours BSc Global Health",
    about:
      `My name is Suheera, and I am currently pursuing a Bachelor’s degree in Global Health with a minor in Biology at York University. I am passionate about bridging science, healthcare, and community impact, which has led me to be actively involved in various academic, clinical, and leadership initiatives. This year, I am serving as Vice President of STEM Fellowship, where I help organize programs that empower students through research and innovation. In my free time, I enjoy going on walks, painting, and spending time with my cat, Mila. One of my favourite things about YorkU is its diverse student community, which inspires creativity and leadership. Looking forward to a successful year!`,
  },
  {
    name: "Sania Khoso",
    role: "Indicum Lead",
    year: "Fourth",
    program: "Honours BSc Kinesiology and Health Science",
    about:
      `My name is Sania Khoso, and I am excited to be serving as the Indicium Lead for the STEM Fellowship Club at York University. I am entering my fourth year of undergraduate studies in Kinesiology and Health Science. I plan to pursue a career as either an ultrasound technician or a physician's assistant after my undergraduate studies. Some of my hobbies include reading, painting, and going for long walks. One of my favourite things about York University is its diverse communities, as there are a variety of clubs to join and events to meet new people. I also love York's campus, especially the outdoor seating areas and cherry blossoms that bloom each May.`,
  },
  {
    name: "Bahar Saroya",
    role: "Junior Indicum Lead",
    year: "Fourth",
    program: "Honours BSc Kinesiology and Health Science",
    about:
      `My name is Bahar and I am currently studying Kinesiology, entering my fourth year this fall at York University. In my free time, I enjoy painting, reading, and spending quality time with my family and friends. Over the past year, I had the opportunity to work at a physiotherapy clinic, where I supported physiotherapists and worked closely with patients. This experience helped me develop strong communication and hands-on skills while deepening my passion for helping others. In the future, I hope to pursue a career in which I can continue supporting individuals in improving their physical well-being. One of the things I value most about York University is its supportive and diverse community, as well as the many opportunities it offers to get involved in various clubs, meet new people, and grow both academically and personally.`,
  },
  {
    name: "Seleena Yevenes",
    role: "REO Lead",
    year: "Fourth",
    program: "Honours BSc Biology",
    about:
      `My name is Seleena Yevenes (she/her), and I am honoured to serve as the Research Exploration Opportunity (REO) Lead of STEM Fellowship at York University for the 2025–2026 academic year. I am currently in my fourth year of the Honours BSc Biology program at York University. Alongside this role, my other commitment at York University this academic year includes working in a research lab. During my free time, I enjoy spending time with my sister, going for runs, and learning new recipes. Throughout my years at York University, I have established profound relationships amongst peers, teaching assistants, and professors. I have come to learn a great deal about myself and others, which has led me toward meaningful experiences. In the future, I aspire to pursue a master’s degree in animal biology, with the goal of working with animals and contributing to research in the field.`,
  },
  {
    name: "Maneet Batajoo",
    role: "REO Coordinator",
    year: "Fourth",
    program: "Honours BSc Biology",
    about:
      `My name is Maneet Batajoo and I am a fourth-year Biology student at York University. I enjoy combining my passion for science with activities that keep me engaged outside the classroom, such as swimming, tennis, and golf. My years of experience in aquatics taught me the value of leadership and mentorship, as I had the opportunity to guide students of all ages. At York, I appreciate the diverse community and the chance to learn from people with different perspectives. I am especially interested in how biology and technology can come together to improve health and quality of life. Looking ahead, I hope to build a career in biomedical research and global health, where I can contribute to meaningful innovations while staying connected to the communities I serve.`,
  },
  {
    name: "Alankriti Thakur",
    role: "Events Lead",
    year: "Third",
    program: "Honours BSc Biology",
    about:
      `I am Alankriti Thakur (she/her), and I’m an Honours Bachelor of Science Biology student at York University with a passion for science, leadership, and creating meaningful opportunities for growth. This year, I’m thrilled to serve as the Event Lead for the STEM Fellowship Club, where I create and run events that spark curiosity, build connections, and inspire students to explore their potential in STEM. My journey with the club started last year as Event Coordinator, and that experience taught me the power of collaboration, adaptability, and creative problem-solving. Outside of STEM Fellowship, I’m involved in other campus initiatives that let me combine my love for science with advocacy and community engagement. I am passionate about creating inclusive spaces where students can learn from one another, share their experiences, and feel supported in their academic and professional journeys. 
      In my personal life, I enjoy discovering new hobbies and am always open to exploring fresh opportunities and experiences that broaden my perspective. York University’s vibrant, diverse, and supportive community has shaped me in countless ways, and I’m grateful for the people and experiences that have inspired my journey so far. In the future, I plan to pursue a career in healthcare, where I can merge my scientific expertise with compassion to improve lives and make a lasting impact.`,
  },
  {
    name: "Gurneet Chahal",
    role: "Events Lead",
    year: "Third",
    program: "Honours BSc Kinesiology and Health Science",
    about:
      `My name is Gurneet Chahal (She/Her), and I am honored to be a part of the 2025–2026 STEM Fellowship team as an Events Lead. I am currently in my third year at York University, pursuing a degree in Kinesiology and Health Science, with the goal of building a future career in the health field. In addition to STEM Fellowship, I also serve as President of GlamourGals and Events Lead of Healthcare Society at York, where I enjoy creating meaningful opportunities for student engagement and growth. Outside of school, I dedicate my time to various volunteer and work commitments, and in my free time, I love spending time with my dog, hanging out with my sister, or reading books. One of the highlights of my York experience has been the friendships I’ve built along the way, as well as the strong sense of community. Beyond that, I truly value the beautiful campus, the connections I’ve made, and the many opportunities York has provided me to learn and grow.`,
  },
  {
    name: "Khushpreet Deol",
    role: "Events Coordinator",
    year: "Third",
    program: "Honours BSc Kinesiology and Health Science",
    about:
      `Hi my name is Khushpreet Deol. I am currently in my third year of Kinesiology and Health Science. I have very excited to be apart of the events team this year. In my free time I love to bake, garden and sew. I am apart of Health care society club and the Sikh associations club. I also volunteer at the hospital where I get to help patients, help relive any If their concerns and make their experience at the hospital more enjoyable. I love hanging out with my friends and family and enjoying good food and music together. We love going to concerts and trying new restaurants.`,
  },
  {
    name: "Sajal Sandhu",
    role: "Marketing Director",
    year: "Second",
    program: "Honours BEng Computer Engineering",
    about:
      `My name is Sajal Sandhu (she/her), and I am currently pursuing a Bachelor of Engineering in Computer Engineering at York University. This year, I am honoured to serve as the Marketing Director for STEM Fellowship at YorkU, where I lead marketing initiatives to strengthen our outreach, enhance student engagement, and promote opportunities for growth by creating and managing impactful marketing content. One of my favourite aspects of York University has been the meaningful relationships I have created with peers, professors, and mentors, which have helped me both academically and personally. These connections have provided me with encouragement and collaboration, while also challenging me to think critically and push beyond my comfort zone. Alongside my academic and leadership commitments, I founded and run setswsage, a nail brand where I design and create custom press-ons and gel x extensions. This venture has allowed me to combine creativity with business skills, while also teaching me discipline, time management, and how to connect with clients on a personal level. I value taking on challenges as opportunities to learn and grow, whether in engineering projects, leadership roles, or entrepreneurial pursuits. Looking ahead, I aspire to pursue a Master’s in Business to complement my technical foundation, with the goal of building a career that merges engineering, innovation, and leadership to make a lasting impact.`,
  },
  {
    name: "Yanti Mulyani",
    role: "Marketing Director",
    year: "Fifth",
    program: "Honours BSc Biomedical Science",
    about:
      `Hello everyone! my name is Yanti (read: Yantee) Mulyani (she/her) and I am very excited to be the marketing manager of STEM FELLOWSHIP at York University for 2025/2026 academic year. I am currently doing Biomedical Science at York and hoping to be able to graduate this upcoming summer (very excited!). Alongside of being the marketing manager of SFYU, I also involved in many other student organizations such as York University Indonesian Student Association (currently serving as a President), part of Science Student Ambassadors, and also serve as a volunteer at the diagnostic imaging department at Brampton Civic Hospital. Some interesting fact about me is that I am fluent in about 3 languages, two of those are Indonesian and Sundanese aside from English, in addition, I am also a very introverted person and thrive in working alone. I have a huge passion for lab works hence why one of my favourite courses was organic chemistry! and I am hoping to be able to pursue a master’s degree in Medical Lab Technician once I graduate. One of the thing that I love about York is the opportunities that came from connections that I made throughout my academic year. Meeting many people with the same passion as me has been thrilling and opens up many great opportunities that leads to great experiences.`,
  },
];

function Initials({ name }) {
  const initials = name
    .split(/\s+/)
    .map(s => s[0]?.toUpperCase())
    .slice(0, 2)
    .join("");
  return (
    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#1F80FF] to-sky-400 text-white font-semibold">
      {initials}
    </div>
  );
}

function TeamPage() {
  return (
    <div className="w-full min-h-full px-4 py-10">
      <div className="mx-auto max-w-3xl grid grid-cols-1 gap-5">
        {execs.map((e) => (
          <article key={e.name} className="card bg-[#1F80FF] shadow-md">
            <div className="card-body">
              <div className="flex items-start gap-4">
                <div className="avatar">
                  <div className="w-16 h-16 rounded-full ring ring-base-300 ring-offset-base-100 ring-offset-2 overflow-hidden">
                      <Initials name={e.name} />
                  </div>
                </div>

                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="card-title m-0 text-xl">{e.name}</h3>
                    <span className="badge border-0 bg-[#132F57] text-white">{e.role}</span>
                  </div>

                  <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1 text-lg">
                    <div>
                      <span className="font-medium">Year:</span> {e.year}
                    </div>
                    <div>
                      <span className="font-medium">Program:</span> {e.program}
                    </div>
                  </div>
                </div>
              </div>

              <p className="mt-3 text-md leading-relaxed font-semibold">
                {e.about}
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export default TeamPage
