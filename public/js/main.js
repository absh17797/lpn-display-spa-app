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

    container.innerHTML = `<div
        style="border: .4vw solid #24B66F; padding: 3vw 2vw; background: #093538; color: white;height:100vh;box-sizing: border-box; margin: 0 auto;text-align:center;font-family: Arial, Helvetica, sans-serif;">
        <div style="display: flex;flex-direction: column; height: 100%;gap:1vw;">
            <div style="flex-grow: 1;">
                <img src="/assets/logo.png" alt="Zapbuild Logo" height="35vw">
            </div>
            <div style="flex-grow: 1;">
                <p style="font-size: clamp(0.875rem, 0.63rem + 0.9333vw, 1.75rem);margin: 2vw 0 .8vw;">Vehicle Number</p>
                <div
                    style="background: white; color: black; padding: .7vw; font-size: clamp(2rem, 1.58rem + 1.6vw, 3.5rem); font-weight: 600; border-radius: .7vw;">
                    <div style="border: .15vw solid #000;border-radius: .4vw;padding: .7vw;">${data.vehicleNumber}</div>
                </div>
            </div>
            <div style="font-size: clamp(1.25rem, 1.04rem + 0.8vw, 2rem); font-weight: 600;  color: ${statusColor};flex-grow: 1;">${statusText}</div>
            <div style="background-color: #0D5E61;border-radius: .3vw;padding: .7vw;text-align: left;flex-grow: 1;">
                <div style="font-size: clamp(0.875rem, 0.805rem + 0.2667vw, 1.125rem);margin-bottom: .2vw;">Entry Type</div>
                <div style="font-size: clamp(1.125rem, 1.02rem + 0.4vw, 1.5rem);font-weight: 600;">${data.entryType}</div>
            </div>
            <div style="display: flex;gap: .8vw;margin: .8vw 0;flex-grow: 1;">
                <div style="background-color: #0D5E61;border-radius: .3vw;padding: .7vw;text-align: left;flex-grow: 1;">
                    <div style="font-size: clamp(0.875rem, 0.805rem + 0.2667vw, 1.125rem);margin-bottom: .2vw;">Lane Number</div>
                    <div style="font-size: clamp(1.125rem, 1.02rem + 0.4vw, 1.5rem);font-weight: 600;">${data.laneNumber}</div>
                </div>
                <div style="background-color: #0D5E61;border-radius: .3vw;padding: .7vw;text-align: left;flex-grow: 1;">
                    <div style="font-size: clamp(0.875rem, 0.805rem + 0.2667vw, 1.125rem);margin-bottom: .2vw;">Gate Number</div>
                    <div style="font-size: clamp(1.125rem, 1.02rem + 0.4vw, 1.5rem);font-weight: 600;">${data.gateNumber}</div>
                </div>
            </div>
            <div style="background-color: #0D5E61;border-radius: .3vw;padding: .7vw;text-align: left;flex-grow: 1;">
                <div style="font-size: clamp(0.875rem, 0.805rem + 0.2667vw, 1.125rem);margin-bottom: .2vw;">ANPR Location</div>
                <div style="font-size: clamp(1.125rem, 1.02rem + 0.4vw, 1.5rem);font-weight: 600;">${data.location}</div>
            </div>
        </div>
    </div>`
  }
}

setInterval(updateDisplay, 3000);




