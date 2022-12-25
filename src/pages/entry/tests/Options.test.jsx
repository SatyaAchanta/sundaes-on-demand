import { render, screen } from "@testing-library/react";

import Options from "../Options";

test("should display image for each scoop from server", async () => {
  render(<Options optionType="scoops" />);

  // find images
  const scoopImages = await screen.findAllByRole("img", { name: /scoop$/i });

  expect(scoopImages).toHaveLength(2);

  const altTextContent = scoopImages.map((element) => element.alt);

  expect(altTextContent).toEqual(["Chocolate scoop", "Vanilla scoop"]);
});

test("should display image for each topping from server", async () => {
  render(<Options optionType="toppings" />);

  // find images
  const toppingImages = await screen.findAllByRole("img", {
    name: /topping$/i,
  });

  expect(toppingImages).toHaveLength(3);

  const altTextContent = toppingImages.map((element) => element.alt);

  expect(altTextContent).toEqual([
    "M&Ms topping",
    "Hot fudge topping",
    "Peanut butter cups topping",
  ]);
});
