interface Project {
  id: string;
  name: string;
  date_init: string;
  jobs: Job[];
}

interface Job {
  id: string;
  description: string;
  state: string;
  date_limit: string;
}

export type { Project, Job };
