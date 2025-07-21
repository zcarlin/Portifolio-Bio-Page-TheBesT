async function updateProfileImage(userId) {
  try {
    const response = await fetch(`https://api.lanyard.rest/v1/users/${userId}`);
    const data = await response.json();

    const user = data.data.discord_user;

    const img = document.querySelector(`.profile-img[data-user-id="${userId}"]`);
    const name = document.querySelector(`.name[data-user-id="${userId}"]`);

    if (img) {
      img.src = user.avatar
        ? `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.${user.avatar.startsWith("a_") ? "gif" : "png"}?size=512`
        : "https://cdn.discordapp.com/embed/avatars/1.png";
    }

    if (name) {
      name.textContent = user.username;
    }
  } catch (error) {
    console.error(`Erro ao buscar dados do usuário ${userId}:`, error);
  }
}

window.onload = function () {
  const userIds = [
    "991463686285836318",
    "856551486657789993",
    "991867329866629183",
    "204107355913191424"
  ];

  userIds.forEach(updateProfileImage);
};
