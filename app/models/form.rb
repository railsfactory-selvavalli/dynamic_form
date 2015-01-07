class Form < ActiveRecord::Base
	serialize :form_fields, Array
end
