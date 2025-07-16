async function updateDisplay() {
  const res = await fetch("/api/display");
  const data = await res.json();
  const container = document.getElementById("display-container");

  if (!data.vehicleNumber) {
    container.innerHTML = `<h1>Welcome to Zapbuild</h1>`;
  } else {
    const isApproved = data.status === "Approved";
    const statusColor = isApproved ? "green" : "red";
    const statusText = isApproved ? "Approved" : "Disapproved";

    // container.innerHTML = `
    //   <div style="border: 5px solid #00b894; padding: 20px; border-radius: 10px; background: #01232f; color: white;">
    //     <h2 style="font-size: 2em;">Vehicle Number</h2>
    //     <div style="background: white; color: black; padding: 10px; font-size: 2em; border-radius: 10px; display: inline-block;">${data.vehicleNumber}</div>
    //     <div style="margin: 20px 0; font-size: 1.5em; color: ${statusColor};">
    //       <strong>Status:</strong> <span style="color: ${statusColor}; font-weight: bold;">${statusText}</span>
    //     </div>
    //     <p><strong>Entry:</strong> ${data.entryType}</p>
    //     <p><strong>Lane Number:</strong> ${data.laneNumber}</p>
    //     <p><strong>Gate Number:</strong> ${data.gateNumber}</p>
    //     <p><strong>ANPR Location:</strong> ${data.location}</p>
    //   </div>
    // `;

     container.innerHTML = `<div
        style="border: 5px solid #24B66F; padding: 40px 20px 20px; background: #093538; height:100vh; color: white;margin:0 auto;text-align:center;font-family: Arial, Helvetica, sans-serif;">
        <img src="https://www.zapbuild.com/images/logo.png" alt="Zapbuild Logo">
        <p style="font-size: 14px;margin: 30px 0 8px;">Vehicle Number</p>
        <div
            style="background: white; color: black; padding: 5px; font-size: 32px; font-weight: 600; border-radius: 10px;">
            <div style="border:1px solid #000;border-radius: 5px;padding: 5px;">CH 04 K 5598</div>
        </div>
        <div style="margin: 20px 0 30px; font-size: 22px; font-weight: 600; color: #12AF70;">Approved</div>
        <div style="background-color: #0D5E61;border-radius: 5px;padding: 10px;text-align: left;">
            <div style="font-size: 14px;margin-bottom: 4px;">Entry</div>
            <div style="font-size: 22px;font-weight: 600;">Employee</div>
        </div>
        <div style="display: flex;gap: 10px;margin: 10px 0;">
            <div style="background-color: #0D5E61;border-radius: 5px;padding: 10px;text-align: left;flex-grow: 1;">
                <div style="font-size: 14px;margin-bottom: 4px;">Lane Number</div>
                <div style="font-size: 22px;font-weight: 600;">02</div>
            </div>
            <div style="background-color: #0D5E61;border-radius: 5px;padding: 10px;text-align: left;flex-grow: 1;">
                <div style="font-size: 14px;margin-bottom: 4px;">Gate Number</div>
                <div style="font-size: 22px;font-weight: 600;">02</div>
            </div>
        </div>
        <div style="background-color: #0D5E61;border-radius: 5px;padding: 10px;text-align: left;">
            <div style="font-size: 14px;margin-bottom: 4px;">ANPR Location</div>
            <div style="font-size: 22px;font-weight: 600;">Lore ispsum</div>
        </div>
    </div>`
  }
}

setInterval(updateDisplay, 3000);




