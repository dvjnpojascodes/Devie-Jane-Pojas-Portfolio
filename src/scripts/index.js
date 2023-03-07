      // Get references to the text and div elements
      const training1 = document.getElementById("training1");
      const training2 = document.getElementById("training2");
      const training3 = document.getElementById("training3");

      const trainingContent = document.getElementById("training-content");
      const training1Content = document.getElementById("training-1-content");
      const training2Content = document.getElementById("training-2-content");
      const training3Content = document.getElementById("training-3-content");

      // Add event listeners to the text elements
      training1.addEventListener("click", function () {
        showTrainingContent(1);
      });
      training2.addEventListener("click", function () {
        showTrainingContent(2);
      });
      training3.addEventListener("click", function () {
        showTrainingContent(3);
      });

      // Function to show/hide div elements based on index
      function showTrainingContent(index) {
        switch (index) {
          case 1:
            training1Content.classList.remove("hidden");
            training2Content.classList.add("hidden");
            training3Content.classList.add("hidden");
            break;
          case 2:
            training1Content.classList.add("hidden");
            training2Content.classList.remove("hidden");
            training3Content.classList.add("hidden");
            break;
          case 3:
            training1Content.classList.add("hidden");
            training2Content.classList.add("hidden");
            training3Content.classList.remove("hidden");
            break;
          default:
            break;
        }
      }