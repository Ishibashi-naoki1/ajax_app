Rails.application.routes.draw do
  # HTTPメソッド 'URIパターン', to: 'コントローラー名#アクション名'トップページへのルーティング
  root to: 'posts#index'  
  post 'posts', to: 'posts#create'
end
