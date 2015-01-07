class CreateForms < ActiveRecord::Migration
  def change
    create_table :forms do |t|
      t.string :name
      t.text :form_fields
      t.text :form_fields_value
      t.timestamps
    end
  end
end
