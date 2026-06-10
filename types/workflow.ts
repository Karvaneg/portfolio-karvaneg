export type WorkflowIcon = 'skill' | 'test' | 'architecture';

export interface WorkflowSkill {
  id: string;
  icon: WorkflowIcon;
  title: string;
  description: string;
  tags: string[];
}
