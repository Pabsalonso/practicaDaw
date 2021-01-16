class MainController < ApplicationController
	def index
		current_user = User.find_by_id(session[:current_user_id])
		flash[:alert] = current_user
	end
	def carta
	end
	def ofertas
	end
	def carrito
	end
	def signUp
	end
	def login
	end
	def account
	end
end
