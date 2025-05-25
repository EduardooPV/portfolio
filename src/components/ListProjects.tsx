import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ProjectProps } from '../pages/projetos';
import { fadeInUp, staggerContainer, hoverScale } from '../styles/animations';

interface ListProjectsProps {
  projects: ProjectProps[];
}

export function ListProjects({ projects }: ListProjectsProps) {
  const [selectedTag, setSelectedTag] = useState<string>('');
  const [sortBy, setSortBy] = useState<'date' | 'title'>('date');

  // Extrair todas as tags únicas
  const allTags = Array.from(
    new Set(projects.flatMap(project => project.tags.map(tag => tag.text)))
  );

  // Filtrar e ordenar projetos
  const filteredProjects = projects
    .filter(project => 
      selectedTag ? project.tags.some(tag => tag.text === selectedTag) : true
    )
    .sort((a, b) => {
      if (sortBy === 'date') {
        return new Date(b.published).getTime() - new Date(a.published).getTime();
      }
      return a.title.localeCompare(b.title);
    });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial="initial"
        animate="animate"
        variants={staggerContainer}
        className="space-y-8"
      >
        <div className="flex flex-wrap gap-4 items-center justify-between">
          <div className="flex gap-2 flex-wrap">
            <button
              className={`px-4 py-2 rounded-full ${
                !selectedTag ? 'bg-blue-500 text-white' : 'bg-gray-200'
              } transition-colors`}
              onClick={() => setSelectedTag('')}
            >
              Todos
            </button>
            {allTags.map(tag => (
              <button
                key={tag}
                className={`px-4 py-2 rounded-full ${
                  selectedTag === tag ? 'bg-blue-500 text-white' : 'bg-gray-200'
                } transition-colors`}
                onClick={() => setSelectedTag(tag)}
              >
                {tag}
              </button>
            ))}
          </div>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as 'date' | 'title')}
            className="px-4 py-2 rounded-lg border border-gray-300"
          >
            <option value="date">Data</option>
            <option value="title">Título</option>
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.slug}
              variants={fadeInUp}
              whileHover={hoverScale}
              className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300"
            >
              <div className="relative h-48">
                <Image
                  src={project.image.url}
                  alt={project.image.description}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                <p className="text-gray-600 line-clamp-3">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span
                      key={tag.text}
                      className="px-3 py-1 rounded-full text-sm"
                      style={{ backgroundColor: tag.color + '20', color: tag.color }}
                    >
                      {tag.text}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center pt-4">
                  <span className="text-sm text-gray-500">{project.published}</span>
                  <div className="flex gap-4">
                    {project.linkGithub && (
                      <Link href={project.linkGithub} target="_blank" rel="noopener noreferrer">
                        <button className="text-gray-600 hover:text-gray-900">
                          GitHub
                        </button>
                      </Link>
                    )}
                    {project.linkPreview && (
                      <Link href={project.linkPreview} target="_blank" rel="noopener noreferrer">
                        <button className="text-blue-600 hover:text-blue-800">
                          Preview
                        </button>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
} 