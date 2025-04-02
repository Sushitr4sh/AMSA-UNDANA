"use client";

import Image from "next/image";
import {
  RenderImageContext,
  RenderImageProps,
  ColumnsPhotoAlbum,
} from "react-photo-album";
import "react-photo-album/columns.css";

const photos = [
  {
    src: "/amsa-event-1.png",
    width: 1200,
    height: 800, // Landscape
    alt: "AMSA Event 1",
    title: "Annual Conference 2024",
  },
  {
    src: "/amsa-event-1.png",
    width: 700,
    height: 1000, // Portrait
    alt: "AMSA Workshop",
    title: "Medical Workshop",
  },
  {
    src: "/amsa-event-1.png",
    width: 900,
    height: 600, // Landscape
    alt: "Student Discussion",
    title: "Group Discussion",
  },
  {
    src: "/amsa-event-1.png",
    width: 800,
    height: 1200, // Portrait
    alt: "AMSA Volunteering",
    title: "Community Health Program",
  },
  {
    src: "/amsa-event-1.png",
    width: 1200,
    height: 900, // Landscape
    alt: "Medical Research",
    title: "Scientific Research Symposium",
  },
  {
    src: "/amsa-event-1.png",
    width: 600,
    height: 800, // Portrait
    alt: "Health Campaign",
    title: "Public Health Awareness",
  },
  {
    src: "/amsa-event-1.png",
    width: 1100,
    height: 700, // Landscape
    alt: "Networking Event",
    title: "Meet & Greet Night",
  },
  {
    src: "/amsa-event-1.png",
    width: 750,
    height: 1000, // Portrait
    alt: "Training Session",
    title: "Skill Development Workshop",
  },
  {
    src: "/amsa-event-1.png",
    width: 1300,
    height: 800, // Landscape
    alt: "Guest Lecture",
    title: "Insights from Industry Experts",
  },
  {
    src: "/amsa-event-1.png",
    width: 640,
    height: 960, // Portrait
    alt: "Fundraising Event",
    title: "Charity Gala",
  },
  {
    src: "/amsa-event-1.png",
    width: 1024,
    height: 768, // Landscape
    alt: "Medical Simulation",
    title: "Emergency Response Training",
  },
  {
    src: "/amsa-event-1.png",
    width: 800,
    height: 1200, // Portrait
    alt: "University Collaboration",
    title: "Joint Research Project",
  },
  {
    src: "/amsa-event-1.png",
    width: 1280,
    height: 720, // Landscape
    alt: "Student Bonding",
    title: "Team Building Retreat",
  },
  {
    src: "/amsa-event-1.png",
    width: 900,
    height: 1200, // Portrait
    alt: "Leadership Seminar",
    title: "Future Leaders in Medicine",
  },
  {
    src: "/amsa-event-1.png",
    width: 1200,
    height: 1000, // Landscape
    alt: "Panel Discussion",
    title: "Expert Panel on Healthcare",
  },
  {
    src: "/amsa-event-1.png",
    width: 1600,
    height: 900, // Landscape
    alt: "Awards Ceremony",
    title: "Celebrating Excellence",
  },
];

function renderNextImage(
  { alt = "", title, sizes }: RenderImageProps,
  { photo, width, height }: RenderImageContext
) {
  return (
    <div
      style={{
        width: "100%",
        position: "relative",
        aspectRatio: `${width} / ${height}`,
      }}
    >
      <Image
        fill
        src={photo}
        alt={alt}
        title={title}
        sizes={sizes}
        className="object-cover"
        placeholder={"blurDataURL" in photo ? "blur" : undefined}
      />
    </div>
  );
}

export default function PhotoGallery() {
  return (
    <ColumnsPhotoAlbum
      photos={photos}
      render={{ image: renderNextImage }}
      defaultContainerWidth={1200}
      sizes={{
        size: "1168px",
        sizes: [
          { viewport: "(max-width: 1200px)", size: "calc(100vw - 32px)" },
        ],
      }}
    />
  );
}
