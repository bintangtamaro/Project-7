function formAlert() {
  let projectName = document.getElementById("inputProject").value;
  let dateAwal = document.getElementById("date1").value;
  let dateAkhir = document.getElementById("date2").value;
  let desc = document.getElementById("desc").value;

  if (projectName == "") {
    return alert("Nama harus diisi dong");
  } else if (dateAwal == "") {
    return alert("Tanggal mulainya harus diisi dong");
  } else if (dateAkhir == "") {
    return alert("Tanggal selesainya harus diisi dong");
  } else if (desc == "") {
    return alert("Deskripsinuya jangan lupa diisi juga ya");
  }
}

let dataProject = [];

function addProject(event) {
  event.preventDefault();
  let projectName = document.getElementById("inputProject").value;
  let dateAwal = document.getElementById("date1").value;
  let dateAkhir = document.getElementById("date2").value;
  let desc = document.getElementById("desc").value;
  let images = document.getElementById("inputImg").files;

  let diff;
  diff = new Date(dateAwal - dateAkhir);
  let months = diff.getMonth();
  let days = diff.getDate();

  const nodeIcon = `<i class="fa-brands fa-node-js"></i>`;
  const goIcon = `<i class="fa-brands fa-golang"></i>`;
  const reactIcon = `<i class="fa-brands fa-react"></i>`;
  const javaIcon = `<i class="fa-brands fa-java"></i>`;

  let nodeDet = document.getElementById("nodeJs").checked ? nodeIcon : "";
  let GoDet = document.getElementById("Go").checked ? goIcon : "";
  let reactDet = document.getElementById("reactJs").checked ? reactIcon : "";
  let javaDet = document.getElementById("java").checked ? javaIcon : "";

  images = URL.createObjectURL(images[0]);
  console.log(images);

  let projectPreview = {
    projectName,
    months,
    days,
    desc,
    nodeDet,
    GoDet,
    reactDet,
    javaDet,
    images,
  };

  dataProject.push(projectPreview);
  pushProject();

  renderProject();
}

function pushProject() {
  document.getElementById("contents").innerHTML = "";

  for (let i = 0; i < dataProject.length; i++) {
    document.getElementById("contents").innerHTML += `
            <div class="project-list-item">
                  <img src="${dataProject[i].images}" alt="gambarproject" />
                  <h3>${dataProject[i].projectName}
                  </h3> 
                      <div class="previewInfo">
                      <p>${dataProject[i].desc}
                      </p>
                      <div class="previewTech">
                          ${dataProject[i].nodeDet}
                          ${dataProject[i].GoDet} 
                          ${dataProject[i].reactDet}
                          ${dataProject[i].javaDet}
                      </div>
                          <div class="itemBtn">
                              <button class="btn-edit">Edit Post</button>
                              <button class="btn-delete">Delete Post</button>
                          </div>
                          </h1>
                              <a href="detail-project.html" target="_blank"
                              >$ {dataProject[index].title}>/a
                              >
                          </h1>
                          <div class="detail-project-content">
                           ${getFullTime(dataProject[index].postAt)} | ${
      dataProject[index]
    }
                      </div>
                        <p>
                            ${dataProject[index].content}
                        </p>
                        <div style="float: right; margin: 10px">
                          <p style="font-size: 15px; color: grey">${getDistanceTime(
                            dataProject[index].postAt
                          )}</p>
                        </div>
                      </div>

                    </div>
                   `;
  }
}

function getFullTime(time) {
  // console.log("get full time");
  // let time = new Date();
  // console.log(time);

  let monthName = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  // console.log(monthName[8]);

  let date = time.getDate();
  // console.log(date);

  let monthIndex = time.getMonth();
  // console.log(monthIndex);

  let year = time.getFullYear();
  // console.log(year);

  let hours = time.getHours();
  let minutes = time.getMinutes();
  // console.log(minutes);

  if (hours <= 9) {
    hours = "0" + hours;
  } else if (minutes <= 9) {
    minutes = "0" + minutes;
  }

  return `${date} ${monthName[monthIndex]} ${year} ${hours}:${minutes} WIB`;
}

function getDistanceTime(time) {
  let timeNow = new Date();
  let timePost = time;

  // waktu sekarang - waktu post
  let distance = timeNow - timePost; // hasilnya milidetik
  console.log(distance);

  let milisecond = 1000; // milisecond
  let secondInHours = 3600; // 1 jam 3600 detik
  let hoursInDays = 24; // 1 hari 24 jam

  let distanceDay = Math.floor(
    distance / (milisecond * secondInHours * hoursInDays)
  ); // 1/86400000
  let distanceHours = Math.floor(distance / (milisecond * 60 * 60)); // 1/3600000
  let distanceMinutes = Math.floor(distance / (milisecond * 60)); // 1/60000
  let distanceSeconds = Math.floor(distance / milisecond); // 1/1000

  if (distanceDay > 0) {
    return `${distanceDay} Day Ago`;
  } else if (distanceHours > 0) {
    return `${distanceHours} Hours Ago`;
  } else if (distanceMinutes > 0) {
    return `${distanceMinutes} Minutes Ago`;
  } else {
    return `${distanceSeconds} Seconds Ago`;
  }
}

// setInterval(function () {
// pushProject();
// }, 10000);
