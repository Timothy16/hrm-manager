<template>
    <div>
        <h3>Job Information</h3>
        <hr>
        <form @submit.prevent="submitJob">
            <div class="form-row">
                <div class="form-group col-md-6">
                     <label for="">Job Title</label>
                <input type="text" name="" class="form-control" id="" required v-model="postJob.job_title">
                </div>
                <div class="form-group col-md-6">
                <label for="">Job Type</label> <br>
                 <!-- <input type="text" name="" class="form-control" id=""> -->
                <select class="custom-select increase-height" id="" required v-model="postJob.job_type">
                    <option value=""  selected disabled>Job Type</option>
                    <option value="Full-Time">Full-Time</option>
                     <option value="Part-Time">Part-Time</option>
                     <option value="Remote">Remote</option>
                      <option value="Freelancer">Freelancer</option>
                </select>
                </div>
            </div>
             <div class="form-row">
                <div class="form-group col-md-6">
                     <label for="">Company/Organization Name</label>
                <input type="text" name="" class="form-control" id="" required  v-model="postJob.company_name">
                </div>
                <div class="form-group col-md-6">
                <label for="">Location</label> <br>
                <input type="text" name="" class="form-control" id="" required  v-model="postJob.company_address">
                </div>
            </div>
             <div class="form-row">
                <div class="form-group col-md-6">
                     <label for="">Company Email Address</label>
                <input type="text" name="" class="form-control" id="" required v-model="postJob.company_email">
                </div>
                <div class="form-group col-md-6">
                <label for="">Salary Range</label> <br>
                <input type="text" name="" class="form-control" id="" required v-model="postJob.salary_range">
                </div>
            </div>
            <div>
                <div class="form-row">
                    <div class="form-group col-md-6">
                     <label for="">Job Description</label> <br>
                    <textarea name="" id="" class="p-2 form-control" required  v-model="postJob.job_description"></textarea>
                     </div>
                      <div class="form-group col-md-6">
                     <label for="">Job Requirement</label> <br>
                    <textarea name="" id="" class="p-2 form-control" required  v-model="postJob.job_requirement"></textarea>
                     </div>
                    </div>
                </div>
                <div class="text-center mt-3">
                    <button type="submit" class="btn btn-primary btn-edit">Post Job</button>
                </div>
              
        </form>
        
    </div>
</template>

<script>
import axios from  'axios'
export default {
    data(){
        return{
            postJob : {
                job_title : "",
                job_type : "",
                job_description : "",
                job_requirement : "",
                company_name : "",
                company_address : "",
                salary_range : "",
                company_email : ""
            }
        }
    },
    methods: {
        submitJob(){
            const formData= new FormData();
               formData.append('job_title' , this.postJob.job_title)
               formData.append('job_type' , this.postJob.job_type)
               formData.append(' job_description' , this.postJob.job_description)
               formData.append('job_requirement' , this.postJob.job_requirement)
               formData.append('company_name', this.postJob.company_name)
               formData.append('company_address' , this.postJob.company_address)
               formData.append('salary_range' , this.postJob.salary_range)
               formData.append('company_email' , this.postJob.company_email)
               formData.append('user_id', 1)
               formData.append('managers_id', 1)
            
         axios.post('https://jobcaster.herokuapp.com/api/postjob',formData)
       .then(function(res){
           swal({
        title: "Good Job!",
        text: "Job Posted Successfully!",
        icon: "success",
        });
        console.log(res.data)
      })
      .catch(function(error){
        console.log(error)
      })
            console.log(this.postJob)
        }
    }
}
</script>>

<style scoped>
textarea{
    width: 100%;
    height: 200px;
    outline: none;
}
.form-control{
    width: 100% !important;
    padding: 1rem 2rem;
}
.increase-height{
    height: calc(2.8em + .75rem + 2px) !important;
    width: 100% !important;
    padding: .375rem 17rem .375rem .75rem !important;
}
.btn-edit{
    padding: 1rem 5rem !important;
}
.btn-primary{
    background: #0065FC !important;
}
</style>