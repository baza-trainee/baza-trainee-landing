import styles from './ProjectCardTeam/styles.module.scss';
const RenderTeamMembersByRole = (
  roleName: string,
  project: { teamMembers: object[] }
) => {
  const members = project.teamMembers.filter(
    (member: any) => member.role.name === roleName
  );
  return (
    <ul className={styles['thumb__container__body__members']}>
      {members.map((member: any) => (
        <li key={member.id}>
          <a
            className={styles['thumb__container__body__link']}
            href={member.user.link}
            target="_blank"
          >
            {member.user.name}
          </a>
        </li>
      ))}
    </ul>
  );
};
export default RenderTeamMembersByRole;
