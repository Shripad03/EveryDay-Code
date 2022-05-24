// Boolean Matrix
// Given a boolean matrix mat[M][N] of size M X N, modify it such that if a matrix cell 
// mat[i][j] is 1 (or true) then make all the cells of ith row and jth column as 1.

class Main {

	public static void booleanMatrix(int mat[][], int R, int C){
		int row[] = new int[R];
		int col[] = new int[C];
		int i, j;

		for (i=0 ; i < R; i++){
			row[i] = 0;
		}
		for (j=0 ; j < C; j++){
			col[j] = 0;
		}

		for (i = 0 ; i < R; i++){
			for (j = 0 ; j < C; j++){
				if (mat[i][j] == 1){
					row[i] = 1;
					col[j] = 1;
				}
			}
		}
		for (i = 0 ; i < R; i++){
			for (j = 0 ; j < C; j++){
				if (row[i] == 1 || col[j] == 1){
					mat[i][j] = 1;
				}
			}
		}

	}

	public static void printMatrix(int mat[][], int row , int col){
		for (int i = 0; i < row; i++){
			for (int j = 0; j < col; j++){
				System.out.print(mat[i][j] + " ");
			}
			System.out.println();
		}
	}

	public static void main(String args[]) {
		int mat[][] = {
            { 1, 0, 0, 1 },
            { 0, 0, 1, 0 },
            { 0, 0, 0, 0 },
        };
		System.out.println("Initial Matrix");
		printMatrix(mat ,3,4);
		booleanMatrix(mat ,3,4);
		System.out.println("Matrix after modification");
		printMatrix(mat ,3,4);
	}
}