class FormController < ApplicationController
	  respond_to :json
	
	def index
		respond_with Form.all
	end
	
	 def create
   @form_new = Form.new(form_params)
	 @form_new
   @form_new.save
   respond_with @form_new
  end
  
    private
  def form_params
		params[:form].merge!({name: "name_#{Time.now.to_i}"})
	  params[:form].permit!
  end
end
