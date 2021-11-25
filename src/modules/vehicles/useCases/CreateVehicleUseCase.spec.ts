import { CreateVehicleUseCase } from "./CreateVehicleUseCase";
import { FakeVehiclesRepository } from "../infra/typeorm/repositories/fake/FakeVehiclesRepository";
import { VehicleStatus } from "../domain/schema/IVehicle";

describe("CreateVehicleUseCase", () => {
  let fakeRepository: FakeVehiclesRepository;
  let createVehicleUseCase: CreateVehicleUseCase;

  beforeEach(() => {
    fakeRepository = new FakeVehiclesRepository();
    createVehicleUseCase = new CreateVehicleUseCase(fakeRepository);
  });

  it("should be able to create a new vehicle", async () => {
    const vehicle = await createVehicleUseCase.execute({
      brand: "Toyota",
      model: "2020",
      color: "Red",
      date_ingress: new Date(),
      identification: "ABC123",
      news: "new toyota cool",
      status: VehicleStatus.Active,
    });

    expect(vehicle).toHaveProperty("id");
    expect(vehicle).toHaveProperty("brand");
    expect(vehicle).toHaveProperty("model");
    expect(vehicle).toHaveProperty("color");
    expect(vehicle).toHaveProperty("date_ingress");
    expect(vehicle).toHaveProperty("identification");
    expect(vehicle).toHaveProperty("news");
    expect(vehicle).toHaveProperty("status");
  });
});
