import { useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight, Images, Play, X } from 'lucide-react'
import ShapeGrid from '../components/ShapeGrid'

const projectImages = import.meta.glob('../assets/images/projects/**/*.{png,jpg,jpeg,webp}', {
  eager: true,
  query: '?url',
  import: 'default',
})
const projectVideos = import.meta.glob('../assets/images/projects/**/*.{mp4,webm,ogg}', {
  eager: true,
  query: '?url',
  import: 'default',
})

const projectDetails = [
  {
    folder: 'AI-Driven Smart Waste Segregation and Incentive Management System Using Computer Vision, IoT Sensors, and Predictive Recycling Analytics for Pasig Elementary School',
    title: 'Plink Smart Eco Recycling',
    category: 'AI · IoT · Sustainability',
    created: 'July 2026',
    technologies: ['Computer vision', 'IoT sensors', 'Predictive analytics', 'Laravel', 'React', 'Tailwind CSS', 'MySQL'],
    description: 'A school recycling management system for tracking collection machines, student records, and recycling performance, with AI-assisted waste detection and analytics.',
  },
  {
    folder: 'HashCrack- CTF',
    title: 'HashCrack CTF',
    category: 'Cybersecurity · Capture the Flag',
    created: 'July 2026',
    technologies: ['PHP', 'MySQL', 'JavaScript', 'HTML', 'CSS'],
    description: 'A cybersecurity challenge platform with account access and a capture-the-flag focus, designed to make hands-on hash cracking practice approachable.',
  },
{
    folder: 'J3RS E-Commerce',
    title: 'J3RS E-Commerce',
    category: 'E-commerce · Online retail',
    created: 'May 2026',
    technologies: ['PHP', 'MySQL', 'JavaScript', 'HTML', 'CSS'],
    description: 'An online storefront for browsing a curated product collection, learning about the shop, and accessing customer account features.',
  },
  {
    folder: 'HR Employee Management System',
    title: 'HR Employee Management System',
    category: 'Human Resources · Administration',
    created: 'November 2025',
    technologies: ['PHP', 'MySQL', 'JavaScript', 'HTML', 'CSS'],
    description: 'An employee management application concept for helping HR teams organize employee information and everyday workforce administration.',
  }
]

const projects = projectDetails.map(project => {
  const folderPath = `../assets/images/projects/${project.folder}/`
  const images = Object.entries(projectImages)
    .filter(([path]) => path.startsWith(folderPath))
    .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
    .map(([path, src]) => ({ src, name: path.split('/').at(-1) }))
  const videos = Object.entries(projectVideos)
    .filter(([path]) => path.startsWith(folderPath))
    .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
    .map(([path, src]) => ({ src, name: path.split('/').at(-1) }))
  const media = [
    ...images.map(image => ({ ...image, type: 'image' })),
    ...videos.map(video => ({ ...video, type: 'video' })),
  ]

  return { ...project, images, videos, media }
})

function Experience() {
  const experienceRef = useRef(null)
  const [activeImages, setActiveImages] = useState({})
  const [selectedProjectId, setSelectedProjectId] = useState(null)
  const [modalMediaIndex, setModalMediaIndex] = useState(0)
  const dialogRef = useRef(null)

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return

    if (selectedProjectId && !dialog.open) dialog.showModal()
    if (!selectedProjectId && dialog.open) dialog.close()
  }, [selectedProjectId])

  const changeImage = (project, direction) => {
    setActiveImages(current => {
      const currentIndex = current[project.folder] ?? 0
      const nextIndex = (currentIndex + direction + project.images.length) % project.images.length
      return { ...current, [project.folder]: nextIndex }
    })
  }

  const openProject = (project, imageIndex) => {
    const videoIndex = project.images.length
    setModalMediaIndex(project.videos.length ? videoIndex : imageIndex)
    setSelectedProjectId(project.folder)
  }

  const selectedProject = projects.find(project => project.folder === selectedProjectId)
  const selectedMedia = selectedProject?.media[modalMediaIndex]

  const changeModalMedia = direction => {
    if (!selectedProject?.media.length) return
    setModalMediaIndex(current => (current + direction + selectedProject.media.length) % selectedProject.media.length)
  }

  return (
    <section ref={experienceRef} id="Experience" className="home-hero experience-section">
      <div className="home-glow home-glow-one" aria-hidden="true" />
      <div className="home-glow home-glow-two" aria-hidden="true" />
      <div className="experience-grid-background" aria-hidden="true">
        <ShapeGrid
          shape="square"
          squareSize={80}
          speed={0.55}
          borderColor="rgba(167, 139, 250, 0.18)"
          hoverFillColor="#6d5dfc"
          hoverTrailAmount={6}
          interactionTargetRef={experienceRef}
        />
      </div>

      <div className="experience-content">
        <div className="experience-heading">
          <p className="experience-eyebrow">SELECTED WORK</p>
          <h2>Projects <span>&amp; Experience</span></h2>
          <p>Explore the products, tools, and ideas I have worked on.</p>
        </div>

        <div className="experience-grid">
          {projects.map(project => {
            const currentIndex = activeImages[project.folder] ?? 0
            const currentImage = project.images[currentIndex]

            return (
              <article className="project-card" key={project.folder}>
                <div className="project-media">
                  <button
                    type="button"
                    className={`project-image-open${currentImage ? '' : ' project-image-empty'}`}
                    onClick={() => openProject(project, currentIndex)}
                    aria-haspopup="dialog"
                    aria-label={project.videos.length ? `Play ${project.title} demo` : `View ${project.title} images`}
                  >
                    <span className={`project-image${currentImage ? '' : ' project-image-empty'}`}>
                      {currentImage ? (
                        <img src={currentImage.src} alt="" loading="lazy" />
                      ) : (
                        <span className="project-image-placeholder">
                          <Images size={30} aria-hidden="true" />
                          <span>Project images coming soon</span>
                        </span>
                      )}
                      <span className="project-category">{project.category}</span>
                      <span className="project-view-hint">{project.videos.length ? 'Click to play demo' : 'Click to view images'}</span>
                      {project.videos.length > 0 && (
                        <span className="project-video-badge">
                          <Play size={14} fill="currentColor" aria-hidden="true" /> Video demo
                        </span>
                      )}
                    </span>
                  </button>

                  {project.images.length > 1 && (
                    <div className="project-gallery-controls" aria-label={`${project.title} image gallery`}>
                      <button type="button" onClick={() => changeImage(project, -1)} aria-label={`Previous ${project.title} image`}>
                        <ChevronLeft size={18} aria-hidden="true" />
                      </button>
                      <span>{currentIndex + 1} / {project.images.length}</span>
                      <button type="button" onClick={() => changeImage(project, 1)} aria-label={`Next ${project.title} image`}>
                        <ChevronRight size={18} aria-hidden="true" />
                      </button>
                    </div>
                  )}
                </div>

                <button
                  className="project-details-trigger"
                  type="button"
                  onClick={() => openProject(project, currentIndex)}
                  aria-haspopup="dialog"
                  aria-label={project.videos.length ? `Play ${project.title} demo` : `View ${project.title} images`}
                >
                  <div className="project-details">
                  <div className="project-title-row">
                    <h3>{project.title}</h3>
                    <span>Created · {project.created}</span>
                  </div>
                  <p className="project-description">{project.description}</p>
                  <p className="project-tech-label">Languages, frameworks &amp; libraries</p>
                  <div className="project-tech">
                    {project.technologies.map(technology => <span key={technology}>{technology}</span>)}
                  </div>
                  </div>
                </button>
              </article>
            )
          })}
        </div>
      </div>

      <dialog
        ref={dialogRef}
        className="project-image-modal"
        aria-labelledby="project-image-modal-title"
        onClose={() => setSelectedProjectId(null)}
        onClick={event => {
          if (event.target === event.currentTarget) event.currentTarget.close()
        }}
      >
        {selectedProject && (
          <>
            <div className="project-modal-header">
              <div>
                <p>PROJECT GALLERY</p>
                <h2 id="project-image-modal-title">{selectedProject.title}</h2>
              </div>
              <button type="button" onClick={() => dialogRef.current?.close()} aria-label="Close project gallery">
                <X size={22} aria-hidden="true" />
              </button>
            </div>

            {selectedMedia ? (
              <div className="project-modal-viewer">
                {selectedMedia.type === 'video' ? (
                  <video src={selectedMedia.src} controls autoPlay muted playsInline preload="metadata">
                    Your browser does not support embedded video.
                  </video>
                ) : (
                  <img src={selectedMedia.src} alt={`${selectedProject.title} screenshot`} />
                )}
                {selectedProject.media.length > 1 && (
                  <>
                    <button className="project-modal-arrow project-modal-previous" type="button" onClick={() => changeModalMedia(-1)} aria-label="Previous project media">
                      <ChevronLeft size={24} aria-hidden="true" />
                    </button>
                    <button className="project-modal-arrow project-modal-next" type="button" onClick={() => changeModalMedia(1)} aria-label="Next project media">
                      <ChevronRight size={24} aria-hidden="true" />
                    </button>
                  </>
                )}
              </div>
            ) : (
              <div className="project-modal-empty">
                <Images size={34} aria-hidden="true" />
                <p>Images for this project have not been added yet.</p>
              </div>
            )}

            <div className="project-modal-footer">
              <span>{selectedMedia?.name ?? 'No images or videos available'}</span>
              {selectedProject.media.length > 1 && (
                <span>{modalMediaIndex + 1} of {selectedProject.media.length}</span>
              )}
            </div>
          </>
        )}
      </dialog>
    </section>
  )
}

export default Experience
