//Program to find transpose of a matrix

class Main {

    static void transpose(int A[][], int B[][],int row ,int col)
    {
        int i, j;
        for (i = 0; i < col; i++)
            for (j = 0; j < row; j++)
                B[i][j] = A[j][i];
    }
     
    // Driver code
    public static void main (String[] args)
    {
        int A[][] = { {1, 1, 1, 1},
                      {2, 2, 2, 2},
                      {3, 3, 3, 3}};
		int row = A.length;
		int col = A[0].length;
     
        int B[][] = new int[col][row], i, j;
     
        transpose(A, B, row, col);
     
        System.out.print("Result matrix is \n");
        for (i = 0; i < col ; i++)
        {
            for (j = 0; j < row; j++)
            System.out.print(B[i][j] + " ");
            System.out.print("\n");
        }
    }
}