TRUNCATE TABLE public.pg_sessions RESTART IDENTITY CASCADE;

TRUNCATE TABLE public.email_invitations RESTART IDENTITY CASCADE;

TRUNCATE TABLE public.task_labels RESTART IDENTITY CASCADE;

TRUNCATE TABLE public.team_labels RESTART IDENTITY CASCADE;

TRUNCATE TABLE public.tasks_assignees RESTART IDENTITY CASCADE;

TRUNCATE TABLE public.project_members RESTART IDENTITY CASCADE;

TRUNCATE TABLE public.project_access_levels RESTART IDENTITY CASCADE;

TRUNCATE TABLE public.role_permissions RESTART IDENTITY CASCADE;

TRUNCATE TABLE public.permissions RESTART IDENTITY CASCADE;

TRUNCATE TABLE public.project_logs RESTART IDENTITY CASCADE;

TRUNCATE TABLE public.personal_todo_list RESTART IDENTITY CASCADE;

TRUNCATE TABLE public.user_notifications RESTART IDENTITY CASCADE;

TRUNCATE TABLE public.task_work_log RESTART IDENTITY CASCADE;

TRUNCATE TABLE public.task_comment_contents RESTART IDENTITY CASCADE;

TRUNCATE TABLE public.task_comments RESTART IDENTITY CASCADE;

TRUNCATE TABLE public.team_members RESTART IDENTITY CASCADE;

TRUNCATE TABLE public.job_titles RESTART IDENTITY CASCADE;

TRUNCATE TABLE public.roles RESTART IDENTITY CASCADE;

TRUNCATE TABLE public.task_attachments RESTART IDENTITY CASCADE;

TRUNCATE TABLE public.worklenz_alerts RESTART IDENTITY CASCADE;

TRUNCATE TABLE public.favorite_projects RESTART IDENTITY CASCADE;

TRUNCATE TABLE public.archived_projects RESTART IDENTITY CASCADE;

TRUNCATE TABLE public.shared_projects RESTART IDENTITY CASCADE;

TRUNCATE TABLE public.task_templates_tasks RESTART IDENTITY CASCADE;

TRUNCATE TABLE public.task_templates RESTART IDENTITY CASCADE;

TRUNCATE TABLE public.notification_settings RESTART IDENTITY CASCADE;

TRUNCATE TABLE public.task_updates RESTART IDENTITY CASCADE;

TRUNCATE TABLE public.task_timers RESTART IDENTITY CASCADE;

TRUNCATE TABLE public.tasks RESTART IDENTITY CASCADE;

TRUNCATE TABLE public.task_priorities RESTART IDENTITY CASCADE;

TRUNCATE TABLE public.task_statuses RESTART IDENTITY CASCADE;

TRUNCATE TABLE public.sys_task_status_categories RESTART IDENTITY CASCADE;

TRUNCATE TABLE public.project_task_list_cols RESTART IDENTITY CASCADE;

TRUNCATE TABLE public.projects RESTART IDENTITY CASCADE;

TRUNCATE TABLE public.clients RESTART IDENTITY CASCADE;

TRUNCATE TABLE public.teams, public.users RESTART IDENTITY CASCADE;

TRUNCATE TABLE public.timezones RESTART IDENTITY CASCADE;

TRUNCATE TABLE public.sys_project_statuses RESTART IDENTITY CASCADE;
