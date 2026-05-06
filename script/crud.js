//Read
const getProfiles = () => {
  const data = localStorage.getItem('vovo_profiles');
  return data ? JSON.parse(data) : [];
};
//Create
const saveProfile = (newProfile) => {
  const profiles = getProfiles();
  const profileWithId = { ...newProfile, id: Date.now() }; // Gera ID único pelo timestamp
  profiles.push(profileWithId);
  localStorage.setItem('vovo_profiles', JSON.stringify(profiles));
};
//Update
const updateProfile = (id, updatedData) => {
  const profiles = getProfiles();
  const index = profiles.findIndex(p => p.id === id);
  if (index !== -1) {
    profiles[index] = { ...profiles[index], ...updatedData };
    localStorage.setItem('vovo_profiles', JSON.stringify(profiles));
  }
};
//Delete
const deleteProfile = (id) => {
  const profiles = getProfiles();
  const filtered = profiles.filter(p => p.id !== id);
  localStorage.setItem('vovo_profiles', JSON.stringify(filtered));
};
const form = document.getElementById('profileForm');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const newProfile = {
    nome: document.getElementById('nome').value,
    idade: document.getElementById('idade').value,
    bio: document.getElementById('bio').value,
    foto: "https://via.placeholder.com/150" // Foto padrão
  };

  saveProfile(newProfile);
  alert("Perfil criado com sucesso! Agora você pode encontrar amigos.");
  form.reset();
});