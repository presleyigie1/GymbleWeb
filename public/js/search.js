async function searchName() {
    // code to get names
    const searchName = document.getElementById("searchName").value;
    const res = await fetch(`/users?fname=${searchName}`);
    const data = await res.json();
    const nameRes = document.getElementById("nameRes");
    nameRes.innerHTML = "";
    for (const user of data) {
      const fname = user.fname;
      const row = `<div><strong>${fname}</strong></div>`;
      nameRes.innerHTML += row;
    }
  }
  