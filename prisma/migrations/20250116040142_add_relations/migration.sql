-- AlterTable
ALTER TABLE "examples" ADD COLUMN     "updated_by_user_id" TEXT;

-- AddForeignKey
ALTER TABLE "examples" ADD CONSTRAINT "examples_updated_by_user_id_fkey" FOREIGN KEY ("updated_by_user_id") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;
