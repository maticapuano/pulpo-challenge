import { DeleteVehicleByIdUseCase } from "./DeleteVehicleByIdUseCase";
import { FakeVehiclesRepository } from "../infra/typeorm/repositories/fake/FakeVehiclesRepository";
import { VehicleStatus } from "../domain/schema/IVehicle";
import { NotFoundError } from "../../../shared/errors/NotFoundError";

describe("DeleteVehicleByIdUseCase", () => {
  let fakeRepository: FakeVehiclesRepository;
  let deleteVehicleUseCase: DeleteVehicleByIdUseCase;

  beforeEach(() => {
    fakeRepository = new FakeVehiclesRepository();
    deleteVehicleUseCase = new DeleteVehicleByIdUseCase(fakeRepository);
  });

  it("should be able to delete a vehicle", async () => {
    const vehicle = await fakeRepository.create({
      brand: "Toyota",
      model: "2016",
      color: "Red",
      date_ingress: new Date(),
      identification: "ABC123",
      status: VehicleStatus.Active,
    });

    expect(await fakeRepository.findById(vehicle.id)).toBeUndefined();
  });

  it("should not be able to delete a vehicle with invalid id", async () => {
    await expect(deleteVehicleUseCase.execute("invalid-id")).rejects.toBeInstanceOf(NotFoundError);
  });
});
