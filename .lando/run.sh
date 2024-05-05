if [ ! -d "./wp-admin" ]; then
	wp core download
fi

if ! $(wp core is-installed); then
	wp core install --url="http://wp-starter.local" --title="WP Starter" --admin_user="admin" --admin_password="password" --admin_email="admin@wp-starter.local" --skip-email
fi
