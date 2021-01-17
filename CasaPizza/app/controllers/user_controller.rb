class UserController < ApplicationController
	def new
		@user=User.new
	end

	def create
		@user = User.new(user_params)
		if @user.save
			session[:current_user_id] = @user.id
  			redirect_to :controller => 'main', :action =>'index'

		else
			render :action =>'new'
		end
	end
	
	def show
		@user=User.find(session[:current_user_id])
	end

	def edit
		@user=User.find(session[:current_user_id])
	end

	def update
		@user=User.find(session[:current_user_id])
		if @user.update(user_params)
			redirect_to :action =>'show'
		else
			render :action =>'edit'
		end
	end

	def access
	end

	def signIn
		@user = User.find_by(nick: params[:nick])
		if @user && @user[:passwd] == params[:passwd]
		    session[:current_user_id] = @user.id
		    redirect_to :action => 'show'   
		else
			render :action => 'access'   
		end
	end

	def signOff
		session[:current_user_id] = nil
		redirect_to :controller => 'main', :action =>'index'
	end

	def user_params
		params.require(:user).permit(:nick, :passwd, :name, :srname, :phone, :adress, :email)
	end
end
