function renderTeamMembersByRole(roleName: string, project: any, styles: any) {
  function generateRandomNumber() {
    return Math.floor(Math.random() * 9000) + 1000;
  }

  return (
    <ul className={styles['thumb__container__body__members']}>
      {project.teamMembers.map(
        (member: any) =>
          member.role.name === roleName && (
            <li key={generateRandomNumber()}>
              <a
                key={generateRandomNumber()}
                className={styles['thumb__container__body__link']}
                href={member.user.link}
                target="_blank"
              >
                {member.user.name}
              </a>
            </li>
          )
      )}
    </ul>
  );
}
export default renderTeamMembersByRole;
