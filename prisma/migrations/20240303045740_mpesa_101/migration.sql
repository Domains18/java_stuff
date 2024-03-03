-- CreateTable
CREATE TABLE "Transactions" (
    "ID" BIGINT NOT NULL PRIMARY KEY,
    "MerchantRequestID" TEXT NOT NULL,
    "CheckoutRequestID" TEXT NOT NULL,
    "ResultCode" TEXT NOT NULL,
    "ResultDesc" TEXT NOT NULL,
    "Amount" TEXT NOT NULL,
    "MpesaReceiptNumber" TEXT NOT NULL,
    "TransactionDate" TEXT NOT NULL,
    "PhoneNumber" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Transactions_MerchantRequestID_key" ON "Transactions"("MerchantRequestID");

-- CreateIndex
CREATE UNIQUE INDEX "Transactions_CheckoutRequestID_key" ON "Transactions"("CheckoutRequestID");
