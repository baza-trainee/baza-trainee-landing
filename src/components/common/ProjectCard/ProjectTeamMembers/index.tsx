import styles from './styles.module.scss';
const ProjectTeamMembers = ({
  roleName,
  teamMembers,
}: {
  roleName: string;
  teamMembers: {
    role: { name: string; _id: string };
    user: { _id: string; link: string; name: string };
  }[];
}) => {
  const members = teamMembers.filter((member) => member.role.name === roleName);

  return (
    <ul className={styles['thumb__container__body__members']}>
      {members.map((member) => (
        <li key={member.user._id}>
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
export default ProjectTeamMembers;
