// array team
const teamMembers = [
    {
      name: "Wayne Barnett",
      role: "Founder & CEO",
      image: "img/wayne-barnett-founder-ceo.jpg"
    },
// ------------------------------------------------
    {
      name: "Angela Caroll",
      role: "Chief Editor",
      image: "img/angela-caroll-chief-editor.jpg"
    },
// ------------------------------------------------
    {
      name: "Walter Gordon",
      role: "Office Manager",
      image: "img/walter-gordon-office-manager.jpg"
    },
// ------------------------------------------------
    {
      name: "Angela Lopez",
      role: "Social Media Manager",
      image: "img/angela-lopez-social-media-manager.jpg"
    },
// ------------------------------------------------
    {
      name: "Scott Estrada",
      role: "Developer",
      image: "img/scott-estrada-developer.jpg"
    },
// ------------------------------------------------
    {
      name: "Barbara Ramos",
      role: "Graphic Designer",
      image: "img/barbara-ramos-graphic-designer.jpg"
    }
  ];
  console.log(teamMembers);

  teamMembers.forEach(member => {
    console.log(`Nome: ${member.name}, Ruolo: ${member.role}, Foto: ${member.image}`);
  });
// creare una card per ogni array
function displayTeamMembers() {
  const teamContainer = document.getElementById('team-container');
  teamMembers.forEach(member => {
    const memberInfo = `
      <div class="member-card">
        <h3>${member.name}</h3>
        <p> ${member.role}</p>
        <img src="${member.image}" alt="${member.name}">
      </div>
    `;
    teamContainer.innerHTML += memberInfo;
  });
}
// Chiamare questa funzione dopo che il DOM è stato caricato
document.addEventListener('DOMContentLoaded', displayTeamMembers);