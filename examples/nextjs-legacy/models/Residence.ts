
/**
 * Models: class definition of the data used in your form or preferrable an exact replica of the DB Table
 * material-ui-forms is designed around generic typing and defining your data is the first step
 */
export default class Residence
{
    residenceId?: number;
    type?: string;
    addressLine1?: string;
    addressLine2?: string;
    city?: string;
    state?: string;
    zipCode?: string;
    country?: string;
}
