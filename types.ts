export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, any>;
  type: string;
  created_at: string;
  modified_at: string;
}

export interface CosmicFile {
  url: string;
  imgix_url: string;
}

export interface Project extends CosmicObject {
  type: 'projects';
  metadata: {
    name?: string;
    short_description?: string;
    description?: string;
    featured_screenshot?: CosmicFile;
    gallery?: CosmicFile[];
    tech_stack?: string[] | string;
    live_url?: string;
    github_url?: string;
    featured?: boolean;
  };
}

export interface Skill extends CosmicObject {
  type: 'skills';
  metadata: {
    name?: string;
    category?: string;
    proficiency?: string | number;
    years?: number;
  };
}

export interface WorkExperience extends CosmicObject {
  type: 'work-experience';
  metadata: {
    job_title?: string;
    company?: string;
    company_logo?: CosmicFile;
    location?: string;
    start_date?: string;
    end_date?: string;
    current?: boolean;
    description?: string;
  };
}

export function hasStatus(error: unknown): error is { status: number } {
  return typeof error === 'object' && error !== null && 'status' in error;
}