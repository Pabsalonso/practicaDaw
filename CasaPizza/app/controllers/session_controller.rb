class SessionController < ApplicationController
	def create
  		session[:current_user_id] = @user.id
  		redirect_to :controller => 'main', :action =>'index'
	end
end
