export interface ITaskAttachmentViewModel {
  id?: string;
  name?: string;
  url?: string;
  size?: string;
  type?: string;
  created_at?: string;
  task_name?: string;
  task_key?: string;
  uploader_name?: string;
}

export interface IProjectAttachmentsViewModel {
  total?: number;
  data?: ITaskAttachmentViewModel[];
}

export interface ITaskAttachment {
  file: string;
  file_name: string;
  project_id: string;
  size: number;
  task_id?: string | null;
}
