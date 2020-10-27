import _ from 'lodash';

export default function CustomError (err){
   this.details = _.get(err, 'response.data.details');

   this.code = _.get(err, 'response.data.code');

   this.message = _.get(err, 'response.data.message') || err.message;
}