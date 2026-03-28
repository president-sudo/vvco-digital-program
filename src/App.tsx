type ProgramSong = {
  title: string;
  soloist?: string;
};

type Person = {
  name: string;
  role: string;
  headshot: string;
  bio?: string;
};

type Soloist = {
  name: string;
  songs: string;
  bio: string;
  headshot: string;
};

type OrchestraSection = {
  title: string;
  lines: string[];
};

type ChoirSection = {
  title: string;
  names: string[];
};

type ProgramData = {
  title: string;
  subtitle: string;
  date: string;
  time: string;
  venue: string;
  bannerImage: string;
  intro: string;
  act1: ProgramSong[];
  act2: ProgramSong[];
  soloists: Soloist[];
  thankYou: string;
  conductors: Person[];
  board: Person[];
  staff: Person[];
  orchestraSections: OrchestraSection[];
  choirSections: ChoirSection[];
};

const program: ProgramData = {
  title: "Wish Upon A Star",
  subtitle: "Disney in Concert",
  date: "Saturday, March 28",
  time: "7:00 PM",
  venue: "Mesa Arts Center",
  bannerImage: "/images/banner.jpg",
  intro:
    "Welcome to Wish Upon A Star. We’re so glad you’re here. Tonight’s program features beloved songs, stunning soloists, and cinematic orchestral moments designed to bring a little extra magic to your evening.",
  act1: [
    { title: "Main Titles" },
    { title: "Part of Your World", soloist: "Madison" },
    { title: "Almost There", soloist: "Sydney" },
    { title: "A Dream Is a Wish Your Heart Makes", soloist: "Aubrey" },
    { title: "Golden", soloist: "Emmary" },
    { title: "Beauty and the Beast", soloist: "Sydney" },
    { title: "A Whole New World", soloist: "Aubrey & Spencer" },
    { title: "Vuelie" },
    { title: "Let It Go", soloist: "Emmary" },
  ],
  act2: [
    { title: "Pirates of the Caribbean" },
    { title: "How Far I’ll Go", soloist: "Sydney" },
    { title: "I See the Light", soloist: "Madison & Spencer" },
    { title: "Colors of the Wind", soloist: "Sydney" },
    { title: "Reflection", soloist: "Madison" },
    { title: "Defying Gravity", soloist: "Emmary" },
    { title: "When You Wish Upon a Star", soloist: "Aubrey" },
  ],
  soloists: [
    {
      name: "Madison Holland",
      songs: "Part of Your World, I See the Light, Reflection",
      bio: `Madison, a singer born and raised in Arizona, began training her voice at the young age of 9. During her formative years, she showcased her talent in various musical productions throughout the valley, (Sweeney Todd, Little Shop of Horrors, Annie, My Fair Lady, The Wiz) mainly with Valley Youth Theatre and Actors Youth Theatre. Singing has consistently been a central passion in Madison's life, and in recent years, she has channeled this passion into launching her own performance business, Madison Holland Vocals. This venture has opened doors for her to perform at weddings and special events across Arizona, infusing each occasion with a unique touch of artistry and elegance. Madison dreams of reflecting on her life and being amazed by all the moments she had the chance to share her voice with the community.

Follow Madison along her journey:

Instagram: @madisonhollandvocals
Facebook: Madison Holland Vocals
www.madisonhollandvocals.com`,
      headshot: "/images/madison.jpg",
    },
    {
      name: "Sydney Marian",
      songs: "Almost There, How Far I’ll Go, Colors of the Wind",
      bio: "Sydney Marian is a Navajo and Cherokee vocalist/songwriter based in Chandler, AZ. Sydney has a background in musical theatre/theatre and a BA in Theatre Arts from Arizona State University. Her credits include Deb in Ordinary Days, Heidi in [Title of Show] and Lois in Kiss Me Kate. Sydney has taken a break from theatre endeavors to pursue writing her own music and playing gigs around the Valley. She is most proud of her Indigenous People’s Day performance at the Heard Museum in 2023 and her featured track “Burnt Orchards” on indigenous collective Earth Surface People’s album, Yáágo Dootliźh. Sydney is honored to be a part of Wish Upon a Star with VVCO and looks forward to getting involved in the future.",
      headshot: "/images/sydney.jpg",
    },
    {
      name: "Aubrey Mickelson",
      songs: "A Dream Is a Wish Your Heart Makes, A Whole New World, When You Wish Upon a Star",
      bio: `Aubrey has had a lifelong love for singing, beginning as a child when she would joyfully imitate the voices of Barbie from her favorite movies. That early passion grew into active participation in high school choir and musical theater, where she performed in productions such as Hello, Dolly! and Seussical the Musical.

She continued her musical journey in college, majoring in Vocal Performance at Mesa Community College. During her time there, Aubrey had the honor of performing the national anthem at a graduation ceremony and frequently shared her voice across campus in patriotic performances. She also performed numerous solos with the college choir and took part in an opera production, where she was featured in several solo roles. Additionally, she appeared in the college production of Beauty and the Beast.

Aubrey has competed in multiple vocal competitions, earning 3rd place in Musical Theatre and 1st place in Classical Voice. She graduated with an Associate’s degree in Vocal Performance and has continued to share her talents through solo performances in her church and local community.
She is beyond excited and grateful for the opportunity to once again share her voice as a member of the VVCO Choir and Orchestra.`,
      headshot: "/images/aubrey.jpg",
    },
    {
      name: "Emmary Noble",
      songs: "Golden, Let It Go, Defying Gravity",
      bio: `Emmary has been singing for as long as she can remember, with a lifelong passion for performing. She has been involved in singing groups throughout her life and had the opportunity to tour with the top choir at Eastern Arizona College, where she was also a featured soloist with their jazz ensemble. She has also competed in the Gila Valley Idol singing competition and was a featured soloist in an Easter Worship Concert.

She loves performing a variety of styles, especially pop, country, and musical theatre. As a self-proclaimed karaoke master, she isn’t afraid to take the stage and make it her own. She is a huge Disney fan and is excited to be part of this magical show and share her love of music with the audience!`,
      headshot: "/images/emmary.jpg",
    },
    {
      name: "Spencer Rydman",
      songs: "A Whole New World, I See the Light",
      bio: "Spencer has been singing and participating in musical theater since he was 5 years old. In adulthood he has worked for Black Bart’s musical review in Flagstaff, where he sang professionally for several years while also doing shows with the Flagstaff Light Opera Company. Spencer is a well respected attorney specializing in child welfare. He is a graduate of Arizona State University law school. Spencer is a part of a large family and achieved cult fame for a documentary made about him and his 33 siblings. In his spare time, Spencer is pursuing amateur performance magic.",
      headshot: "/images/spencer.jpg",
    },
  ],
  thankYou:
    "Special thanks to the Arts at the Center Foundation for their generous annual grant, which makes it possible for us to perform in the Ikeda Theater at the Mesa Arts Center.",
  conductors: [
    {
      name: "Bryson Merkley",
      role: "Principal Conductor",
      headshot: "/images/bryson.jpg",
      bio: `Bryson Merkley is the Founder, President, and Conductor of Voices of the Valley Choir & Orchestra. A graduate of Arizona State University with a Bachelor’s degree in Music Education, he trained primarily as a violist and has spent nearly eight years teaching violin, viola, and piano privately. Bryson has been conducting ensembles since high school and founded VVCO as his most ambitious creative endeavor, building it from the ground up into a thriving ensemble now in its fifth season.
As a conductor, he is passionate about presenting contemporary, emotionally resonant music that connects deeply with audiences and inspires them to grow. His work blends musical precision with expressive storytelling, creating performances that are both engaging and uplifting.`,
    },
    {
      name: "Kindli Burrell",
      role: "Choir Conductor",
      headshot: "/images/kindli.jpg",
      bio: `Kindli Burrell proudly serves as Choir Director and Assistant Director for Voices of the Valley Choir and Orchestra. In addition to her work with the ensemble, she is a local music educator who is passionate about inspiring a love of music in her students. She has directed student performances and student-written musical productions, helping young performers build confidence and share their talents. Kindli brings that same enthusiasm to her work with the choir, creating meaningful and collaborative musical experiences for the community. She is committed to fostering a supportive environment where singers of all levels can thrive while creating performances that inspire and uplift audiences.`,
    },
  ],
  board: [
    {
      name: "Bryson Merkley",
      role: "President",
      headshot: "/images/bryson.jpg",
    },
    {
      name: "Nick Banks",
      role: "Treasurer",
      headshot: "/images/nick.jpg",
    },
    {
      name: "Karen Lewis",
      role: "Secretary",
      headshot: "/images/karen.jpg",
    },
  ],
  staff: [
    {
      name: "Kindli Burrell",
      role: "Assistant Director",
      headshot: "/images/kindli.jpg",
    },
    {
      name: "Kallie Johnson",
      role: "Orchestra Manager",
      headshot: "/images/kallie.jpg",
    },
    {
      name: "Aidan Christensen",
      role: "Choir Manager",
      headshot: "/images/aidan.jpg",
    },
  ],
  orchestraSections: [
    {
      title: "Woodwinds",
      lines: [
        "Flute: Kallie Johnson‡, Diane Smith",
        "Oboe: Brooklyn Benson‡",
        "Clarinet: Kenseye Fort‡, Kelly Bowker, Elizabeth Trimble",
        "Bassoon: Jaxon Castro‡",
      ],
    },
    {
      title: "Brass",
      lines: [
        "French Horn: Everette Bowers‡, Jeromy McMahon, Erikson Mazariegos, Austin Westenskow",
        "Trumpet: Christopher Doyle‡",
        "Trombone: JD Lindsay‡, Michael Johnson, John Van Pelt (Bass Trombone)",
        "Tuba: Tanner Noe‡",
      ],
    },
    {
      title: "Percussion",
      lines: ["Scott Correl, Sonny Correa, Eliades Ponce, Chris Holley, Jake Krejsta"],
    },
    {
      title: "Keys & Harp",
      lines: ["Harp: Valerie Lunt", "Piano: Carla Smith"],
    },
    {
      title: "Strings",
      lines: [
        "Violin I: Heather Gill†, Christa Cook, Shannon Pizzirusso, Jayce Johnson",
        "Violin II: Dasom Jeon‡, Nichelle Buckner, Cumorah Noe, Rachaell Hubbs",
        "Viola: Ryan Grieser‡, Jenny Crider, Samantha Maloney, Lianna Foliaki",
        "Cello: Emily Barr‡, Hannah Bailey",
        "Bass: Cameron Jones‡",
      ],
    },
  ],
  choirSections: [
    {
      title: "Soprano",
      names: [
        "Courtney Yazzie",
        "Maurie Passey",
        "Collette Barr",
        "Stacey Gohman",
        "Caridee Gill",
        "Kim Tenney",
        "Olivia Kipp",
      ],
    },
    {
      title: "Alto",
      names: [
        "Kindli Burrell",
        "Sara Hallsted",
        "Danet Peterson",
        "Susan Green",
        "Amelia Burrell",
        "Danna Durney",
      ],
    },
    {
      title: "Tenor",
      names: ["Aidan Christensen", "Jeff Burrell", "Bryan Thompson"],
    },
    {
      title: "Bass",
      names: [
        "Porter Buckner",
        "Pharaoh Williams",
        "Gabriel Molletti",
        "Steven Neher",
        "Ben Burrell",
        "Steven Passey",
      ],
    },
  ],
};

function SectionHeader({ eyebrow, title }: { eyebrow: string; title?: string }) {
  return (
    <div>
      <p className="text-[11px] uppercase tracking-[0.3em] text-amber-200">{eyebrow}</p>
      {title ? <h3 className="mt-1 text-xl font-semibold text-white">{title}</h3> : null}
    </div>
  );
}

function ConductorCard({ person }: { person: Person }) {
  return (
    <div className="border-t border-white/10">
      <div className="relative w-full">
        <img
          src={person.headshot}
          alt={`${person.name} headshot`}
          className="w-full h-auto rounded-t-2xl"
        />
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent px-4 pb-4 pt-12 rounded-t-none">
          <h4 className="text-lg font-semibold text-white">{person.name}</h4>
          <p className="text-xs uppercase tracking-widest text-amber-200">{person.role}</p>
        </div>
      </div>
      <div className="p-4">
        <p className="whitespace-pre-line text-sm leading-6 text-white/75">{person.bio ?? ""}</p>
      </div>
    </div>
  );
}

function PeopleGrid({ people }: { people: Person[] }) {
  return (
    <div className="grid grid-cols-2 gap-4 p-4 pt-0 sm:grid-cols-3">
      {people.map((person) => (
        <div key={`${person.name}-${person.role}`}>
          <img
            src={person.headshot}
            alt={`${person.name} headshot`}
            className="h-40 w-full rounded-xl object-cover"
          />
          <p className="mt-2 text-sm font-semibold text-white">{person.name}</p>
          <p className="text-xs text-amber-200">{person.role}</p>
        </div>
      ))}
    </div>
  );
}

function SongList({ label, songs }: { label: string; songs: ProgramSong[] }) {
  return (
    <div>
      <div className="mb-2 text-sm font-semibold text-amber-200">{label}</div>
      <div className="space-y-2">
        {songs.map((item) => (
          <div key={`${label}-${item.title}`} className="rounded-xl bg-white/[0.04] px-4 py-3">
            <p className="text-sm text-white/90">{item.title}</p>
            {item.soloist ? <p className="mt-1 text-xs text-amber-200">Soloist: {item.soloist}</p> : null}
          </div>
        ))}
      </div>
    </div>
  );
}

function SoloistCard({ artist }: { artist: Soloist }) {
  return (
    <div className="border-t border-white/10">
      <div className="relative w-full">
        <img
          src={artist.headshot}
          alt={`${artist.name} headshot`}
          className="w-full h-auto rounded-t-2xl"
        />
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent px-4 pb-4 pt-12 rounded-t-none">
          <h4 className="text-lg font-semibold text-white">{artist.name}</h4>
          <p className="text-xs uppercase tracking-widest text-amber-200">Featured Soloist</p>
        </div>
      </div>
      <div className="p-4">
        <p className="whitespace-pre-line text-sm leading-6 text-white/75">{artist.bio}</p>
        <div className="mt-3 rounded-2xl bg-black/20 p-3">
          <p className="text-[11px] uppercase tracking-widest text-white/45">Songs</p>
          <p className="mt-1 text-sm text-white/90">{artist.songs}</p>
        </div>
      </div>
    </div>
  );
}

function NamedSection({ title, lines }: { title: string; lines: string[] }) {
  return (
    <div>
      <p className="font-semibold text-white">{title}</p>
      <div className="mt-1 space-y-1">
        {lines.map((line) => (
          <p key={`${title}-${line}`} className="text-white/80">
            {line}
          </p>
        ))}
      </div>
    </div>
  );
}

function ChoirBlock({ title, names }: ChoirSection) {
  return (
    <div>
      <p className="font-semibold text-white">{title}</p>
      <div className="mt-1 grid grid-cols-2 gap-x-4 gap-y-1 text-white/80">
        {names.map((name) => (
          <p key={`${title}-${name}`}>{name}</p>
        ))}
      </div>
    </div>
  );
}

function CardSection({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={`mt-5 rounded-2xl border border-white/10 bg-white/[0.03] shadow-lg ${className}`}>
      {children}
    </section>
  );
}

function validateProgramData(data: ProgramData) {
  if (!data.title || !data.bannerImage) {
    throw new Error("Program title and banner image are required.");
  }

  if (data.act1.length === 0 || data.act2.length === 0) {
    throw new Error("Both acts must contain at least one song.");
  }

  if (data.soloists.length === 0) {
    throw new Error("At least one soloist is required.");
  }
}

function runProgramDataTests() {
  validateProgramData(program);

  if (!program.soloists.find((soloist) => soloist.name === "Emmary Noble" && soloist.headshot)) {
    throw new Error("Emmary soloist data is missing or incomplete.");
  }

  if (
    !program.soloists.find(
      (soloist) =>
        soloist.name === "Madison Holland" &&
        soloist.bio.includes("Instagram: @madisonhollandvocals")
    )
  ) {
    throw new Error("Madison soloist data is missing or incomplete.");
  }

  if (!program.orchestraSections.find((section) => section.title === "Strings")) {
    throw new Error("Strings section is missing.");
  }

  if (
    !program.orchestraSections.some((section) =>
      section.lines.some((line) => line.includes("Sonny Correa"))
    )
  ) {
    throw new Error("Updated percussion roster is missing Sonny Correa.");
  }
}

export default function WishUponAStarMobileProgram() {
  runProgramDataTests();

  return (
    <div className="min-h-screen bg-neutral-950 font-sans text-white">
      <div className="mx-auto max-w-md px-4 pb-16 pt-4">
        <div className="sticky top-0 z-20 -mx-4 mb-4 border-b border-white/10 bg-neutral-950/90 px-4 py-3 backdrop-blur">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-amber-200/80">Digital Program</p>
              <h1 className="text-base font-semibold text-white">{program.title}</h1>
            </div>
            <a
              href="#program"
              className="rounded-full border border-white/15 px-3 py-1.5 text-xs text-white/85 transition hover:bg-white/5"
            >
              View Program
            </a>
          </div>
        </div>

        <section className="overflow-hidden rounded-2xl border border-white/10 bg-neutral-900 shadow-lg">
          <div className="relative h-52 w-full overflow-hidden">
            <img
              src={program.bannerImage}
              alt={`${program.title} banner`}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 px-5 pb-6 pt-8">
              <p className="mb-2 text-[11px] uppercase tracking-[0.35em] text-amber-200">In Concert</p>
              <h2 className="text-4xl font-semibold leading-tight text-white">{program.title}</h2>
              <p className="mt-2 text-sm text-white/75">{program.subtitle}</p>
            </div>
          </div>

          <div className="px-5 pb-6 pt-4">
            <div className="grid grid-cols-3 gap-2 text-center">
              <div className="rounded-2xl bg-white/5 p-3">
                <p className="text-[10px] uppercase tracking-widest text-white/45">Date</p>
                <p className="mt-1 text-xs font-medium text-white/90">{program.date}</p>
              </div>
              <div className="rounded-2xl bg-white/5 p-3">
                <p className="text-[10px] uppercase tracking-widest text-white/45">Time</p>
                <p className="mt-1 text-xs font-medium text-white/90">{program.time}</p>
              </div>
              <div className="rounded-2xl bg-white/5 p-3">
                <p className="text-[10px] uppercase tracking-widest text-white/45">Venue</p>
                <p className="mt-1 text-xs font-medium text-white/90">{program.venue}</p>
              </div>
            </div>
          </div>
        </section>

        <CardSection>
          <div id="program" className="p-5">
            <SectionHeader eyebrow="Welcome" />
            <p className="mt-3 text-sm leading-6 text-white/80">{program.intro}</p>
          </div>
        </CardSection>

        <CardSection>
          <div className="p-5">
            <SectionHeader eyebrow="Program" title="Tonight’s Performance" />
            <div className="mt-4 space-y-6">
              <SongList label="Act 1" songs={program.act1} />
              <SongList label="Act 2" songs={program.act2} />
            </div>
          </div>
        </CardSection>

        <CardSection className="overflow-hidden">
          <div className="p-5">
            <SectionHeader eyebrow="Featured Artists" title="Soloist Spotlights" />
          </div>
          <div className="space-y-6 pb-6">
            {program.soloists.map((artist) => (
              <SoloistCard key={artist.name} artist={artist} />
            ))}
          </div>
        </CardSection>

        <CardSection className="overflow-hidden">
          <div className="p-5">
            <SectionHeader eyebrow="Conductors" title="Meet the Conductors" />
          </div>
          <div className="space-y-6 pb-6">
            {program.conductors.map((conductor) => (
              <ConductorCard key={conductor.name} person={conductor} />
            ))}
          </div>
        </CardSection>

        <CardSection>
          <div className="p-5">
            <SectionHeader eyebrow="VVCO Board" />
          </div>
          <PeopleGrid people={program.board} />
        </CardSection>

        <CardSection>
          <div className="p-5">
            <SectionHeader eyebrow="VVCO Staff" />
          </div>
          <PeopleGrid people={program.staff} />
        </CardSection>

        <CardSection>
          <div className="p-5">
            <SectionHeader eyebrow="Orchestra" />
            <p className="mt-2 text-xs text-white/60">† Concertmaster &nbsp;&nbsp; ‡ Principal</p>
            <div className="mt-4 space-y-5 text-sm">
              {program.orchestraSections.map((section) => (
                <NamedSection key={section.title} title={section.title} lines={section.lines} />
              ))}
            </div>
          </div>
        </CardSection>

        <CardSection>
          <div className="p-5">
            <SectionHeader eyebrow="Choir" />
            <div className="mt-4 space-y-5 text-sm">
              {program.choirSections.map((section) => (
                <ChoirBlock key={section.title} title={section.title} names={section.names} />
              ))}
            </div>
          </div>
        </CardSection>

        <CardSection>
          <div className="p-5">
            <SectionHeader eyebrow="Thank You" />
            <p className="mt-3 text-sm leading-6 text-white/80">{program.thankYou}</p>
          </div>
        </CardSection>
      </div>
    </div>
  );
}
