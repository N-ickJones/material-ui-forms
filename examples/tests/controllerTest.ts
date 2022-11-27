import residencesController from "../controllers/ResidenceController";
import Residence from "../models/Residence";


function log(input: any) {
    //Google Console doesn't explicit log like node...
    console.log(JSON.stringify(input))
}

export async function controllerTest() {
    let residence = {} as Residence | null;

    log('Test 1: GetAll Empty')
    log(await residencesController.getAll());


    log('Test 2: Create 1 ')
    residence = await residencesController.create({ type: "testType1" });
    log(residence);
    log('Test 3: GetAll after Create 1')
    log(await residencesController.getAll());

    log('Test 2: Create 2')
    residence = await residencesController.create({ type: "testType2" });
    log(residence);
    log('Test 3: GetAll after Create 2')
    log(await residencesController.getAll());

    log('Test 2: Create 3')
    residence = await residencesController.create({ type: "testType3" });
    log(residence);
    log('Test 3: GetAll after Create 3')
    log(await residencesController.getAll());

    log('Test 3: GetAll after Create')
    log(await residencesController.getAll());

    log('Test 4: Update')
    if (residence?.residenceId !== undefined) {
        const result = await residencesController.update(residence?.residenceId, {...residence, type: "testTypeUpdated"});
        if (result === true) {
            log('Update Success')
        }
        else {
            log('Update Failed: Result was false')
        }
    }
    else log(`Update Failed: ResidenceId`)

    log('Test 5: GetAll after Update')
    log(await residencesController.getAll());

    log('Test6: Delete')
    if (residence?.residenceId !== undefined) {
        residence = await residencesController.delete(residence?.residenceId);
        if (residence) {
            log(`Delete Successful`)
            log(residence);
        }
        else {
            log('Delete Failed: Residence was null')
        }
    }
    else log('Delete Failed: ResidenceId')

    log('Test 7: GetAll after Delete')
    log(await residencesController.getAll());

}

//controllerTest();