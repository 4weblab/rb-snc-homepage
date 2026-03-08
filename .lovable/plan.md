

## Fix: Centrare i dot sulla linea verticale mobile/tablet

### Problema
Nel layout mobile, il contenitore del dot usa `items-start`, quindi il nodo si allinea in alto rispetto alla card adiacente invece che al centro.

### Soluzione
In `src/components/SectorsSection.tsx`, riga 107:
- Cambiare `items-start` in `items-center` sul contenitore flex del layout mobile
- Questo allinea verticalmente il dot al centro della card

Una modifica di una sola classe CSS su una riga.

