import { useEffect, useMemo, useRef, useState } from 'react'
import { Award, ChevronLeft, ChevronRight, ExternalLink, Layers3, Search, X } from 'lucide-react'

const certificateAssets = import.meta.glob(
  '../assets/images/certificates/**/*.{pdf,png,jpg,jpeg,webp}',
  { eager: true, query: '?url', import: 'default' },
)

const certificateRoot = '../assets/images/certificates/'
const issuedDates = {
  'AI-Powered Cybersecurity Defending Systems with Machine Learning.pdf': '2025-03-19',
  'Feel the Vibes Unleash the Power of Vibe Coding.pdf': '2025-07-18',
  'From Data to Insights Machine Learning for Predictive Analysis.png': '2023-11-15',
  'Understanding Prompt Engineering.pdf': '2026-10-15',
  'Automating Deployments on AWS.pdf': '2026-10-18',
  'Google Cloud Fundamentals Core Infrastructure.png': '2026-08-31',
  'Using AWS Security for Developers.pdf': '2026-11-22',
  'Describe Azure compute services.pdf': '2026-11-01',
  'Describe Azure identity, access, and security.pdf': '2026-11-01',
  'Describe Azure networking services.pdf': '2026-11-01',
  'Describe Azure storage services.pdf': '2026-11-01',
  'Describe cloud computing.pdf': '2026-10-14',
  'Describe cloud service types.pdf': '2026-10-14',
  'Describe cost management in Azure.pdf': '2026-11-01',
  'Describe features and tools for managing and deploying Azure resources.pdf': '2026-11-01',
  'Describe features and tools in Azure for governance and compliance.pdf': '2026-11-01',
  'Describe monitoring tools in Azure.pdf': '2026-11-01',
  'Describe the benefits of using cloud services.pdf': '2026-10-14',
  'Describe the core architectural components.pdf': '2026-10-15',
  'Introduction to Cloud Infrastructure - Describe Azure architecture and services.pdf': '2026-11-01',
  'Introduction to Cloud Infrastructure - Describe cloud concepts.pdf': '2026-10-14',
  'Introduction to Cloud Infrastructure Describe Azure management and governance.pdf': '2026-11-01',
  'IT Skills Olympics - Certificate of Participation.pdf': '2026-11-04',
  'Stand Out in the Digital Crowd - LinkedIn and Online Presence Essentials.pdf': '2025-06-11',
  'Design Thinking.pdf': '2025-06-03',
  'Leadership and Technopreneurial Mindset.pdf': '2025-06-04',
  'Strategic Foresight and Intro to Technopreneurship.pdf': '2025-06-05',
}

const verificationLinks = {
  'Using AWS Security for Developers.pdf': 'https://www.datacamp.com/completed/statement-of-accomplishment/course/8fe9b21881dbb90ce13b4347f39bf0312ef2787c?utm_medium=organic_social&utm_campaign=sharewidget&utm_content=soa',
  'Automating Deployments on AWS.pdf': 'https://www.datacamp.com/completed/statement-of-accomplishment/course/39e550d21f76719b0443ed05a359bfee2f5650a5?utm_medium=organic_social&utm_campaign=sharewidget&utm_content=soa',
  'Understanding Prompt Engineering.pdf': 'https://www.datacamp.com/completed/statement-of-accomplishment/course/42df71bc712b9427d30bc0c43a4e68a54ab5f0b0?utm_medium=organic_social&utm_campaign=sharewidget&utm_content=soa',
  'Google Cloud Fundamentals Core Infrastructure.png': 'https://www.skills.google/public_profiles/415d75ca-3dd0-4240-bc0a-08bc558af3a1/badges/27473733',
  'Describe Azure compute services.pdf': 'https://learn.microsoft.com/api/achievements/share/en-us/RhoanneAntonio-3874/XPFT6SRY?sharingId=E104B4ECAAB7592D',
  'Describe Azure identity, access, and security.pdf': 'https://learn.microsoft.com/api/achievements/share/en-us/RhoanneAntonio-3874/FENJ6YCX?sharingId=E104B4ECAAB7592D',
  'Describe Azure networking services.pdf': 'https://learn.microsoft.com/api/achievements/share/en-us/RhoanneAntonio-3874/FENJGHSX?sharingId=E104B4ECAAB7592D',
  'Describe Azure storage services.pdf': 'https://learn.microsoft.com/api/achievements/share/en-us/RhoanneAntonio-3874/D3BXZBUJ?sharingId=E104B4ECAAB7592D',
  'Describe cloud computing.pdf': 'https://learn.microsoft.com/api/achievements/share/en-us/RhoanneAntonio-3874/BUEM7HQD?sharingId=E104B4ECAAB7592D',
  'Describe cloud service types.pdf': 'https://learn.microsoft.com/api/achievements/share/en-us/RhoanneAntonio-3874/9ALSLN8U?sharingId=E104B4ECAAB7592D',
  'Describe cost management in Azure.pdf': 'https://learn.microsoft.com/api/achievements/share/en-us/RhoanneAntonio-3874/7DAG39QZ?sharingId=E104B4ECAAB7592D',
  'Describe features and tools for managing and deploying Azure resources.pdf': 'https://learn.microsoft.com/api/achievements/share/en-us/RhoanneAntonio-3874/FENJ6YCX?sharingId=E104B4ECAAB7592D',
  'Describe features and tools in Azure for governance and compliance.pdf': 'https://learn.microsoft.com/api/achievements/share/en-us/RhoanneAntonio-3874/3ZUPJTKH?sharingId=E104B4ECAAB7592D',
  'Describe monitoring tools in Azure.pdf': 'https://learn.microsoft.com/api/achievements/share/en-us/RhoanneAntonio-3874/2TZC8X4V?sharingId=E104B4ECAAB7592D',
  'Describe the benefits of using cloud services.pdf': 'https://learn.microsoft.com/api/achievements/share/en-us/RhoanneAntonio-3874/K9QVVTAB?sharingId=E104B4ECAAB7592D',
  'Describe the core architectural components.pdf': 'https://learn.microsoft.com/api/achievements/share/en-us/RhoanneAntonio-3874/9AL9DE5U?sharingId=E104B4ECAAB7592D',
  'Introduction to Cloud Infrastructure - Describe Azure architecture and services.pdf': 'https://learn.microsoft.com/api/achievements/share/en-us/RhoanneAntonio-3874/9ACQD3TU?sharingId=E104B4ECAAB7592D',
  'Introduction to Cloud Infrastructure - Describe cloud concepts.pdf': 'https://learn.microsoft.com/api/achievements/share/en-us/RhoanneAntonio-3874/U7G5GFN3?sharingId=E104B4ECAAB7592D',
  'Introduction to Cloud Infrastructure Describe Azure management and governance.pdf': 'https://learn.microsoft.com/api/achievements/share/en-us/RhoanneAntonio-3874/D3BXZQLJ?sharingId=E104B4ECAAB7592D',
}

function issuedDateFor(filename) {
  const iso = issuedDates[filename]
  return iso
    ? { iso, label: new Intl.DateTimeFormat('en', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' }).format(new Date(`${iso}T00:00:00Z`)) }
    : null
}

function issueTimestamp(file) {
  return file.issuedDate ? Date.parse(`${file.issuedDate.iso}T00:00:00Z`) : 0
}

function titleFromFilename(filename) {
  return filename
    .replace(/\.[^.]+$/, '')
    .replace(/[_-]+/g, ' ')
    .replace(/\b\w/g, character => character.toUpperCase())
}

function makeCredentialGroups() {
  const files = Object.entries(certificateAssets)
    .map(([path, url]) => ({
      path,
      url,
      filename: path.split('/').at(-1),
      segments: path.replace(certificateRoot, '').split('/'),
    }))
    .sort((a, b) => a.path.localeCompare(b.path, undefined, { numeric: true }))

  const cards = new Map()

  files.forEach(file => {
    const category = file.segments[0]
    const isGroupedFolder = file.segments.length > 2
    const folderName = isGroupedFolder ? file.segments[1] : null
    const key = isGroupedFolder ? `${category}/${folderName}` : file.path
    const title = isGroupedFolder ? titleFromFilename(folderName) : titleFromFilename(file.filename)

    if (!cards.has(key)) {
      cards.set(key, {
        id: key,
        category,
        title,
        files: [],
      })
    }

    cards.get(key).files.push({
      url: file.url,
      name: titleFromFilename(file.filename),
      type: file.filename.split('.').at(-1).toLowerCase(),
      issuedDate: issuedDateFor(file.filename),
      verificationUrl: verificationLinks[file.filename] ?? null,
    })
  })

  return [...cards.values()]
    .map(group => ({
      ...group,
      files: group.files.sort((a, b) => issueTimestamp(b) - issueTimestamp(a)),
    }))
    .sort((a, b) => issueTimestamp(b.files[0]) - issueTimestamp(a.files[0]))
}

const credentialGroups = makeCredentialGroups()
const categories = ['All', ...new Set(credentialGroups.map(group => group.category))]

function CertificatePreview({ file, title }) {
  if (file.type === 'pdf') {
    return (
      <iframe
        className="credential-preview-pdf"
        src={`${file.url}#toolbar=0&navpanes=0&scrollbar=0`}
        title={`${title} certificate preview`}
        loading="lazy"
      />
    )
  }

  return <img className="credential-preview-image" src={file.url} alt={`${title} certificate`} loading="lazy" />
}

function Credentials() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [search, setSearch] = useState('')
  const [activeFiles, setActiveFiles] = useState({})
  const [selectedCertificate, setSelectedCertificate] = useState(null)
  const dialogRef = useRef(null)
  const sectionRef = useRef(null)

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return

    if (selectedCertificate && !dialog.open) dialog.showModal()
    if (!selectedCertificate && dialog.open) dialog.close()
  }, [selectedCertificate])

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const observer = new IntersectionObserver(([entry]) => {
      section.classList.toggle('credentials-visible', entry.isIntersecting)
    }, { threshold: 0.06 })

    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  const visibleCredentials = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase()

    return credentialGroups.filter(group => {
      const matchesCategory = activeCategory === 'All' || group.category === activeCategory
      const searchableText = [group.title, group.category, ...group.files.map(file => file.name)]
        .join(' ')
        .toLowerCase()

      return matchesCategory && (!normalizedSearch || searchableText.includes(normalizedSearch))
    })
  }, [activeCategory, search])

  const selectedGroup = selectedCertificate
    ? credentialGroups.find(group => group.id === selectedCertificate.groupId)
    : null
  const selectedIndex = selectedGroup ? activeFiles[selectedGroup.id] ?? 0 : 0
  const selectedFile = selectedGroup ? selectedGroup.files[selectedIndex] : null

  const changeFile = (group, amount) => {
    setActiveFiles(current => {
      const currentIndex = current[group.id] ?? 0
      const nextIndex = (currentIndex + amount + group.files.length) % group.files.length
      return { ...current, [group.id]: nextIndex }
    })
  }

  return (
    <section ref={sectionRef} id="Credentials" className="credentials-section">
      <div className="credentials-content">
        <div className="credentials-heading">
          <p className="credentials-eyebrow">LEARNING &amp; MILESTONES</p>
          <h2>Credentials <span>&amp; Certificates</span></h2>
          <p>Explore certificates, badges, and learning milestones by category.</p>
        </div>

        <div className="credentials-toolbar">
          <div className="credential-filters" aria-label="Filter credentials by category">
            {categories.map(category => {
              const count = category === 'All'
                ? credentialGroups.length
                : credentialGroups.filter(group => group.category === category).length

              return (
                <button
                  key={category}
                  type="button"
                  className={`credential-filter${activeCategory === category ? ' is-active' : ''}`}
                  aria-pressed={activeCategory === category}
                  onClick={() => setActiveCategory(category)}
                >
                  <span>{category}</span>
                  <span className="credential-filter-count">{count}</span>
                </button>
              )
            })}
          </div>


        </div>

        {visibleCredentials.length > 0 ? (
          <div className="credentials-grid">
            {visibleCredentials.map(group => {
              const currentIndex = activeFiles[group.id] ?? 0
              const currentFile = group.files[currentIndex]

              return (
                <article className="credential-card" key={group.id}>
                  <button
                    className="credential-card-trigger"
                    type="button"
                    onClick={() => setSelectedCertificate({ groupId: group.id })}
                    aria-haspopup="dialog"
                    aria-label={`View ${group.title} certificate`}
                  />
                  <div className="credential-preview">
                    {group.files.length > 1 && (
                      <div className="credential-count-badge">
                        <Layers3 size={14} aria-hidden="true" />
                        {group.files.length} Credentials
                      </div>
                    )}
                    <CertificatePreview file={currentFile} title={group.title} />
                  </div>

                  {group.files.length > 1 && (
                    <div className="credential-carousel-controls">
                      <button type="button" onClick={() => changeFile(group, -1)} aria-label={`Previous ${group.title} certificate`}>
                        <ChevronLeft size={17} /> Previous
                      </button>
                      <span>{currentIndex + 1} <i>of</i> {group.files.length}</span>
                      <button type="button" onClick={() => changeFile(group, 1)} aria-label={`Next ${group.title} certificate`}>
                        Next <ChevronRight size={17} />
                      </button>
                    </div>
                  )}

                  <div className="credential-details">
                    <div className="credential-category-row">
                      <span>{group.category}</span>
                      {currentFile.issuedDate && (
                        <time className="credential-issued-date" dateTime={currentFile.issuedDate.iso}>
                          Issued {currentFile.issuedDate.label}
                        </time>
                      )}
                    </div>
                    <h3>{group.title}</h3>
                    {group.files.length > 1 && <p className="credential-file-name">{currentFile.name}</p>}

                    <div className="credential-actions">
                      <a
                        className="credential-open-button"
                        href={currentFile.verificationUrl ?? currentFile.url}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={currentFile.verificationUrl
                          ? `Verify ${currentFile.name} certificate in a new tab`
                          : `Open ${currentFile.name} certificate in a new tab`}
                      >
                        {currentFile.verificationUrl ? 'Verify certificate' : 'Open certificate'}
                        <ExternalLink size={17} aria-hidden="true" />
                      </a>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        ) : (
          <div className="credentials-empty">
            <Award size={28} aria-hidden="true" />
            <p>No certificates match that search.</p>
          </div>
        )}
      </div>

      <dialog
        ref={dialogRef}
        className="credential-modal"
        aria-labelledby="credential-modal-title"
        onClose={() => setSelectedCertificate(null)}
      >
        {selectedGroup && selectedFile && (
          <>
            <div className="credential-modal-header">
              <div>
                <p>{selectedGroup.title}</p>
                <h2 id="credential-modal-title">{selectedFile.name}</h2>
              </div>
              <button type="button" onClick={() => dialogRef.current?.close()} aria-label="Close certificate preview">
                <X size={21} />
              </button>
            </div>
            {selectedGroup.files.length > 1 && (
              <div className="credential-carousel-controls credential-modal-carousel">
                <button type="button" onClick={() => changeFile(selectedGroup, -1)} aria-label="Previous certificate">
                  <ChevronLeft size={17} /> Previous
                </button>
                <span>{selectedIndex + 1} <i>of</i> {selectedGroup.files.length}</span>
                <button type="button" onClick={() => changeFile(selectedGroup, 1)} aria-label="Next certificate">
                  Next <ChevronRight size={17} />
                </button>
              </div>
            )}
            <div className="credential-modal-preview">
              <CertificatePreview file={selectedFile} title={selectedFile.name} />
            </div>
            <div className="credential-modal-footer">
              {selectedFile.issuedDate && <span>Issued {selectedFile.issuedDate.label}</span>}
              <a href={selectedFile.url} target="_blank" rel="noreferrer">
                Open original file <ExternalLink size={16} />
              </a>
            </div>
          </>
        )}
      </dialog>
    </section>
  )
}

export default Credentials
