#!/bin/bash

IGNORE="./.gitignore";

FRONTEND_IGNORE="./chatapp-frontend/.gitignore";
BACKEND_IGNORE="./chatapp-backend/.gitignore";

echo > $IGNORE

## for front end
while read fig; do
	if [ ! ${#fig} -eq 0 ]; then
		if [ ${fig:0:1} = "/" ]; then
			echo "./chatapp-frontend$fig" >> $IGNORE;
		else 
			echo "./chatapp-frontend/$fig" >> $IGNORE;
		fi
	fi
done < $FRONTEND_IGNORE

## for backend
while read big; do
	if [ ! ${#big} -eq 0 ]; then
		if [ ${big:0:1} = "/" ]; then
			echo "./chatapp-backend$big" >> $IGNORE;
		else 
			echo "./chatapp-backend/$big" >> $IGNORE;
		fi
	fi
done < $BACKEND_IGNORE

