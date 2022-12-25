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
